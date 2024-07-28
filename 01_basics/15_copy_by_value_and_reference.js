/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);
console.log("--------------------");

clone += ", 리눅스입니다.";
console.log(original);
console.log(clone);
console.log("--------------------");

let originalObj = {
  name: "Linux",
  type: "OS",
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log("--------------------");

originalObj["os"] = "Operating System";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: "python",
  type: "programming language",
};

cloneObj = {
  name: "python",
  type: "programming language",
};

console.log(originalObj === cloneObj);
console.log("--------------------");

const linux1 = {
  name: "Linux",
  type: "os",
};

const linux2 = linux1;
const linux3 = {
  name: "Linux",
  type: "os",
};

console.log(linux1 === linux2);
console.log(linux1 === linux3);
console.log(linux2 === linux3);
console.log("--------------------");

/**
 * Spread Operator
 */
const linux4 = {
  ...linux3,
};
console.log(linux4);

console.log(linux4 === linux3);

const linux5 = {
  hardware: "raspberry pi",
  ...linux3,
};
console.log(linux5);

const linux6 = {
  name: "Windows",
  ...linux3,
};
console.log(linux6);

const linux7 = {
  ...linux3,
  name: "Windows",
};
console.log(linux7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];

console.log(numbers2);
