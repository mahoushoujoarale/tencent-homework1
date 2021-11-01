/**
 * 请先补充完成 util.ts 的函数，再通过简单的调用来自测函数实现是否正确
 *
 * 需要自己编写测试用例
 */
import { Util } from "./util";

// 同学们可以通过简单的调用来验证函数，如：
console.log("Util.isNumber", Util.isNumber(NaN));

console.log(
  "Util.addNumber",
  Util.addNumber(
    "-237856756754657576567567567567856785675",
    "-7783642558728934758934275890352478934"
  )
);

console.log("Util.moveZero", Util.moveZero([0, 2, 0, 14, 8, 0]));

console.log("Util.isPlalindromeString", Util.isPlalindromeString("abba"));

console.log("Util.formatNumber", Util.formatNumber(-134564569.3245326));

console.log(
  "Util.fillText",
  Util.fillText("我是{{ name }}，今年{{ age }}岁", { name: "小明", age: 18 })
);
