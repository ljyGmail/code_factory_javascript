/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심블)
 *
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("----------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(infinity);
console.log(nInfinity);
console.log("----------");

/**
 * String 타입
 */
const codefactory = '"코"드팩토리';
console.log(codefactory);
console.log(typeof codefactory);

const butterfly = "'butterfly' viscaria";
console.log(butterfly);

/**
 * Template Literal
 *
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트칭으로 표현하고싶다면 두번 입력하면된다.
 */
const linuxVim = "Linux\nVIM";
console.log(linuxVim);

const linuxCrontab = "Linux\tCtrontab";
console.log(linuxCrontab);

const backSlash = "Linux\\find";
console.log(backSlash);

const smallQuotation = "Linux'Terminal";
console.log(smallQuotation);

const linuxCut = `Linux ' " /
cut`;
console.log(linuxCut);
console.log(typeof linuxCut);

const osName = "Linux";
console.log(osName + " sort");
console.log(`${osName} sort`);
console.log("----------");

/**
 * Boolean  타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("----------");

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 최화하는건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("----------");

/**
 * null 타입
 *
 * undefined와 마친가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof null);
console.log("----------");

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = "1";
const test2 = "1";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const linuxCommandArray = ["wc", "cut", "sort", "uqic", "tr", "xargs"];
console.log(linuxCommandArray);

/**
 * index
 * 
 * 0부텨 시작한다.
 * 1씩 올라갑니다.
 */
console.log(linuxCommandArray[0]);
console.log(linuxCommandArray[5]);

linuxCommandArray[0]='ls';
console.log(linuxCommandArray);
console.log(typeof linuxCommandArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다.
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */