export function isBlob(value) {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return (
    value instanceof Blob ||
    Object.prototype.toString.call(value) === '[object Blob]'
  );
}

const REGEXP_IMAGE_TYPE = /^image\/.+$/;

export function isImageType(value) {
  return REGEXP_IMAGE_TYPE.test(value);
}

const REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

/**
 * Normalize decimal number.
 * Check out {@link https://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */
export function normalizeDecimalNumber(value, times = 100000000000) {
  return REGEXP_DECIMALS.test(value)
    ? Math.round(value * times) / times
    : value;
}

/**
 * Convert image type to extension.
 * @param {string} value - The image type to convert.
 * @returns {boolean} Returns the image extension.
 */
export function imageTypeToExtension(value) {
  let extension = isImageType(value) ? value.substr(6) : '';

  if (extension === 'jpeg') {
    extension = 'jpg';
  }

  return `.${extension}`;
}
