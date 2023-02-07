export default class Utils {
  static getDate(date) {
    date =
      date === "2" || date === "22"
        ? date + 'nd'
        : date === "3" || date === "23"
        ? date + 'rd'
        : date === "21" || date === "1" || date === "31"
        ? date + 'st'
        : date + 'th';
    return date;
  }
  static getMobile(mobile): string { //move this to util
    return mobile
      .toString()
      .replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
}

