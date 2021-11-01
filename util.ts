export class Util {
  /**
   * 15 分
   * 判断一个变量是否是数字
   * e.g. isNumber(4) === true, isNumber({ value: 5}) === false, isNumber('0') === false
   * @param value
   */
  public static isNumber(value: unknown): boolean {
    // TODO 请在这里补充
    return typeof value === "number";
  }

  /**
   * 15 分
   * 千分位分隔符，用英文逗号隔开。
   * 需要考虑负数、小数
   * e.g. formatNumber(-1000000.3232) === '-1,000,000.3232'
   * @param num
   */
  public static formatNumber(num: number): string {
    // TODO 请在这里补充
    return num
      .toString()
      .replace(/\d+/, (str1: string): string =>
        str1.replace(/(\d)(?=(\d{3})+$)/g, (str2: string): string => str2 + ",")
      );
  }

  /**
   * 15 分
   * 模板引擎
   * {{ xxx }} 是用于替换的内容
   * e.g. fillText('我是{{ name }}，今年{{ age }}岁', { name: '小明', age: 18 }) === '我是小明，今年18岁'
   * @param template 模板
   * @param data 填充模板的数据
   */
  public static fillText(template: string, data: object): string {
    // TODO 请在这里补充
    let regexp: RegExp = /\{\{\s?\w+\s?\}\}/g;
    let result: Array<string>;
    let ans: string = template;

    while ((result = regexp.exec(template))) {
      let key: string = result[0].match(/\w+/)[0] || "";
      ans = ans.replace(result[0], data[key]);
    }
    return ans;
  }

  /**s
   * 15 分
   * 判断是否是回文字符串
   * 只考虑字母和数字字符，忽略大小写
   * e.g. isPlalindromeString('A man, a plan, a canal: Panama') === true, isPlalindromeString('abbc') === false
   * @param str
   */
  public static isPlalindromeString(str: string): boolean {
    // TODO 请在这里补充
    let newStr: string = "";
    let len: number = str.length;
    str = str.toLowerCase();
    for (let i: number = 0; i < len; i++) {
      if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9"))
        newStr += str[i];
    }
    len = newStr.length;
    let l: number = 0,
      r: number = len - 1;
    while (l < r) {
      if (newStr[l] !== newStr[r]) return false;
      l++, r--;
    }
    return true;
  }

  /**
   * 15 分
   * 向后移动零
   * 给定一个数组 numbers，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
   * e.g. moveZero([0, 2, 0, 14, 8, 0]) === [2, 14, 8, 0, 0, 0]
   * @param numbers
   * @returns
   */
  public static moveZero(numbers: number[]): number[] {
    // TODO 请在这里补充
    const len: number = numbers.length;
    let l: number = 0,
      r: number = 0;
    while (r < len) {
      if (numbers[r] !== 0) {
        [numbers[l], numbers[r]] = [numbers[r], numbers[l]];
        l++;
      }
      r++;
    }
    return numbers;
  }

  /**
   * 25 分
   * 大数相加
   * 需要考虑负数
   * e.g. addNumber('1000000000000000', '-1000000000000000') === '0
   * @param numstr1
   * @param numstr2
   */
  public static addNumber(numstr1: string, numstr2: string): string {
    // TODO 请在这里补充
    return (BigInt(numstr1) + BigInt(numstr2)).toString();
  }
}
