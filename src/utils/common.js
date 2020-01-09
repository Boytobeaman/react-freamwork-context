/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */

 /**
 * 金额格式化，加上$符号
 *
 * @param {string} data 金额
 * @param {string} sign 符号，默认美元$符号
 * @return {Object} 格式化后的金额
 */
export function formatCurrency(data,sign="$") {
  if (data != null) {
    if (data.charAt(0) === '-') {
        var num = data.substr(1, data.length);
        return `-${sign}` + num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    } else {
        return sign + data.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
  } else {
      return data;
  }
}