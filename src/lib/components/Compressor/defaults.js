export default {
  /**
   * 当设置为true时，压缩后的size如果大于原始size，则导出原始的图片
   * @type {boolean}
   */
  strict: true,

  /**
   * 压缩后输出图片的最大宽度
   * @type {number}
   */
  maxWidth: Infinity,

  /**
   * 压缩后输出图片的最大高度
   * @type {number}
   */
  maxHeight: Infinity,

  /**
   * 压缩后输出图片的最小宽度
   * @type {number}
   */
  minWidth: 0,

  /**
   * 压缩后输出图片的最小高度
   * @type {number}
   */
  minHeight: 0,

  /**
   * 压缩后输出图片的宽度
   * 如果没有设置，则使用原始图片的宽度
   * @type {number}
   */
  width: undefined,

  /**
   * 压缩后输出图片的高度
   * 如果没有设置，则使用原始图片的高度
   * @type {number}
   */
  height: undefined,

  /**
   * 压缩后输出图片的质量
   * 取值必须在(0,1]之间
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.92,

  /**
   * 输出图片的mimeType属性
   * 如果不设置，则使用原始图片的mimeType属性
   * @type {string}
   */
  mimeType: 'auto',

  /**
   * 是否在success回调函数中接收Blob类型的结果，默认是Base64类型
   * 如果压缩后想要Blob类型的结果，则设置为true
   * @type {boolean}
   */
  isAcceptBlob: false,

  /**
   * 压缩图片成功后的回调
   * @type {Function}
   * @param {File} file - 压缩后的图片文件对象
   * @example
   * function (file) {
   *   console.log(file);
   * }
   */
  success: null,

  /**
   * 压缩图片异常处理的回调函数
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) {
   *   console.log(err.message);
   * }
   */
  error: null,
};
