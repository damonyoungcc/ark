import DEFAULTS from './defaults';
import { WINDOW } from './constants';
import {
  isBlob,
  isImageType,
  normalizeDecimalNumber,
  imageTypeToExtension,
} from './util';

const { FileReader } = WINDOW;
const URL = WINDOW.URL || WINDOW.webkitURL;
const REGEXP_EXTENSION = /\.\w+$/;

export default class Compressor {
  constructor(file, options) {
    this.file = file;
    this.image = new Image();
    this.options = {
      ...DEFAULTS,
      ...options,
    };
    this.result = null;
    this.init();
  }

  init() {
    const { file } = this;

    if (!isBlob(file)) {
      this.fail(new Error('The first argument must be a File or Blob object.'));
      return;
    }

    const mimeType = file.type;

    if (!isImageType(mimeType)) {
      this.fail(
        new Error('The first argument must be an image File or Blob object.'),
      );
      return;
    }

    if (!URL || !FileReader) {
      this.fail(
        new Error('The current browser does not support image compression.'),
      );
      return;
    }

    this.load({
      url: URL.createObjectURL(file),
    });
  }

  load(data) {
    const { file, image } = this;

    image.onload = () => {
      this.draw({
        ...data,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      });
    };
    image.onabort = () => {
      this.fail(new Error('Aborted to load the image.'));
    };
    image.onerror = () => {
      this.fail(new Error('Failed to load the image.'));
    };

    // Match all browsers that use WebKit as the layout engine in iOS devices,
    // such as Safari for iOS, Chrome for iOS, and in-app browsers.
    if (
      WINDOW.navigator &&
      /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)
    ) {
      // Fix the `The operation is insecure` error (#57)
      image.crossOrigin = 'anonymous';
    }

    image.alt = file.name;
    image.src = data.url;
  }

  draw({ naturalWidth, naturalHeight, rotate = 0, scaleX = 1, scaleY = 1 }) {
    const { file, image, options } = this;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const aspectRatio = naturalWidth / naturalHeight;
    const is90DegreesRotated = Math.abs(rotate) % 180 === 90;
    let maxWidth = Math.max(options.maxWidth, 0) || Infinity;
    let maxHeight = Math.max(options.maxHeight, 0) || Infinity;
    let minWidth = Math.max(options.minWidth, 0) || 0;
    let minHeight = Math.max(options.minHeight, 0) || 0;
    let width = Math.max(options.width, 0) || naturalWidth;
    let height = Math.max(options.height, 0) || naturalHeight;

    if (is90DegreesRotated) {
      [maxWidth, maxHeight] = [maxHeight, maxWidth];
      [minWidth, minHeight] = [minHeight, minWidth];
      [width, height] = [height, width];
    }

    if (maxWidth < Infinity && maxHeight < Infinity) {
      if (maxHeight * aspectRatio > maxWidth) {
        maxHeight = maxWidth / aspectRatio;
      } else {
        maxWidth = maxHeight * aspectRatio;
      }
    } else if (maxWidth < Infinity) {
      maxHeight = maxWidth / aspectRatio;
    } else if (maxHeight < Infinity) {
      maxWidth = maxHeight * aspectRatio;
    }

    if (minWidth > 0 && minHeight > 0) {
      if (minHeight * aspectRatio > minWidth) {
        minHeight = minWidth / aspectRatio;
      } else {
        minWidth = minHeight * aspectRatio;
      }
    } else if (minWidth > 0) {
      minHeight = minWidth / aspectRatio;
    } else if (minHeight > 0) {
      minWidth = minHeight * aspectRatio;
    }

    if (height * aspectRatio > width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }

    width = Math.floor(
      normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)),
    );
    height = Math.floor(
      normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)),
    );

    const destX = -width / 2;
    const destY = -height / 2;
    const destWidth = width;
    const destHeight = height;

    if (is90DegreesRotated) {
      [width, height] = [height, width];
    }

    canvas.width = width;
    canvas.height = height;

    if (!isImageType(options.mimeType)) {
      options.mimeType = file.type;
    }

    // Override the default fill color (#000, black)
    context.fillStyle = 'transparent';
    context.fillRect(0, 0, width, height);

    context.save();
    context.translate(width / 2, height / 2);
    context.rotate((rotate * Math.PI) / 180);
    context.scale(scaleX, scaleY);
    context.drawImage(image, destX, destY, destWidth, destHeight);
    context.restore();

    // 转换成Blob格式时的回调函数
    const done = (result) => {
      this.done({
        naturalWidth,
        naturalHeight,
        result,
      });
    };

    if (canvas.toBlob && options.isAcceptBlob) {
      canvas.toBlob(done, options.mimeType, options.quality);
    } else {
      done(canvas.toDataURL(options.mimeType, options.quality));
    }
  }

  done({ naturalWidth, naturalHeight, result }) {
    const { file, options } = this;

    if (result) {
      // Returns original file if the result is greater than it and without size related options
      if (
        options.strict &&
        result.size > file.size &&
        options.mimeType === file.type &&
        !(
          options.width > naturalWidth ||
          options.height > naturalHeight ||
          options.minWidth > naturalWidth ||
          options.minHeight > naturalHeight
        )
      ) {
        result = file;
      } else if (options.isAcceptBlob) {
        const date = new Date();

        result.lastModified = date.getTime();
        result.lastModifiedDate = date;
        result.name = file.name;

        // Convert the extension to match its type
        if (result.name && result.type !== file.type) {
          result.name = result.name.replace(
            REGEXP_EXTENSION,
            imageTypeToExtension(result.type),
          );
        }
      }
    } else {
      result = file;
    }

    this.result = result;

    if (options.success) {
      options.success.call(this, result);
    }
  }

  fail(err) {
    const { options } = this;

    if (options.error) {
      options.error.call(this, err);
    } else {
      throw err;
    }
  }

  static setDefaults(options) {
    Object.assign(DEFAULTS, options);
  }
}
