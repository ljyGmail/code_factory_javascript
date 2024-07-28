/**
 * Array Functions
 */
let linuxCommands = ["sort", "wc", "uniq", "grep", "cut", "paste"];

console.log(linuxCommands);

// push()
console.log(linuxCommands.push("find"));
console.log(linuxCommands);
console.log("--------------------");

// pop()
console.log(linuxCommands.pop());
console.log(linuxCommands);
console.log("--------------------");

// shift()
console.log(linuxCommands.shift());
console.log(linuxCommands);
console.log("--------------------");

// unshift()
console.log(linuxCommands.unshift("sort"));
console.log(linuxCommands);
console.log("--------------------");

// splice()
console.log(linuxCommands.splice(0, 3));
console.log(linuxCommands);
console.log("--------------------");

linuxCommands = ["sort", "wc", "uniq", "grep", "cut", "paste"];
console.log(linuxCommands);
console.log("--------------------");

// concat()
console.log(linuxCommands.concat("xargs"));
console.log(linuxCommands);
console.log("--------------------");

// slice()
console.log(linuxCommands.slice(0, 3));
console.log(linuxCommands);
console.log("--------------------");

// spread operator
let linuxCommands2 = [...linuxCommands];
console.log(linuxCommands2);

let linuxCommands3 = [linuxCommands];
console.log(linuxCommands3);

console.log("--------------------");
let linuxCommands4 = linuxCommands;
console.log(linuxCommands4);
console.log(linuxCommands4 === linuxCommands);

console.log([...linuxCommands] === linuxCommands);
console.log("--------------------");

// join()
console.log(linuxCommands.join());
console.log(linuxCommands.join("/"));
console.log(linuxCommands.join(", "));

// sort()
// 오름차순
linuxCommands.sort();
console.log(linuxCommands);

// 내림차순
console.log(linuxCommands.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);
console.log("--------------------");

// map()
console.log(linuxCommands.map((x) => x));
console.log(linuxCommands.map((x) => `Linux: ${x}`));

console.log(
  linuxCommands.map((x) => {
    if (x === "grep") {
      return "global regular expression print";
    } else {
      return `@ ${x} @`;
    }
  })
);

console.log(linuxCommands);
console.log("--------------------");

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));

console.log(numbers.filter((x) => x % 2 === 0));
console.log("--------------------");

// find()
console.log(numbers.find((x) => x % 2 === 0));
console.log("--------------------");

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log("--------------------");

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));