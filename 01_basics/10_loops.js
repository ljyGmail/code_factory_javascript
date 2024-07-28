/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("--------------------");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("--------------------");

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}
console.log("--------------------");

// *을 이용해서 6x6의 정사각형을 출력해라
let square = "";
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}

console.log(square);
console.log("--------------------");

/**
 * for...in
 */
const linux = {
  name: "Linux",
  type: "OS",
  command: "grep",
};

for (let key in linux) {
  console.log(key);
}
console.log("--------------------");

const linuxCommandArray = ["wc", "cut", "grep", "sort", "paste"];

for (let key in linuxCommandArray) {
  console.log(key);
  console.log(`${key}:${linuxCommandArray[key]}`);
}
console.log("--------------------");

/**
 * for...of
 */
for (let value of linuxCommandArray) {
  console.log(value);
}
console.log("--------------------");

/**
 * while
 */
let number = 0;

while (number < 10) {
  number++;
}
console.log(number);
console.log("--------------------");

/**
 * do...while
 */
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);
console.log("--------------------");

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("--------------------");

number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}
console.log("--------------------");

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("--------------------");

number = 0;
while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
