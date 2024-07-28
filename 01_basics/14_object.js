/**
 * Object / 객체
 */

// key : value pair
let linux = {
  name: "Linux",
  type: "OS",
  execute: function () {
    return `${this.name} is running`;
  },
};

console.log(linux);
console.log(linux.name);
console.log(linux["name"]);

const key = "name";

console.log(linux[key]);

console.log(linux.execute());

const commandKey = "name";
const commandValue = "sort";

const osKey = "os";
const osValue = "Linux";

const linux2 = {
  [commandKey]: commandValue,
  [osKey]: osValue,
  execute: function () {
    return `${this.name} is running`;
  },
};

console.log(linux2);
console.log(linux2.execute());

linux2["os"] = "Windows";
console.log(linux2);

linux2["type"] = "convert";
console.log(linux2);

delete linux2["type"];
console.log(linux2);

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할수는 없다.
 * 2) 객체안의 프로퍼티나 메소드는 변경할 수 있다.
 */
const python = {
  name: "Python",
  type: "Programming language",
};
console.log(python);

// python = {};

python["type"] = "script";
console.log(python);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(python));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(python));

const name = "find";

const linux3 = {
  name,
};
console.log(linux3);
