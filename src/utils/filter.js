export default {
  dateFormate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }

    let obj = {
      "M+": date.getMonth() + 1,
      "d+": date.getDay(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };

    for (let key in obj) {
      if (new RegExp(`(${key})`).test(fmt)) {
        let str = obj[key] + "";
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
        );
      }
    }
    return fmt;
  },
  formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    places = !isNaN((places = Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
      i =
        parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      symbol +
      negative +
      (j ? i.substr(0, j) + thousand : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) +
      (places
        ? decimal +
        Math.abs(number - i)
          .toFixed(places)
          .slice(2)
        : "")
    );
  }

} 