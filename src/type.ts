//타입선언

// Boolean (단순한 참/거짓 값을 나타낸다.)
let isBoolean: boolean;
let isDone: boolean = false;

// Number (모든 소수점 값을 사용할 수 있다.)
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

// String (문자열을 나타낸다.)
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = "Your color is" + green;

// Array (순차적으로 값을 가지는 일반 배열을 나타냅니다.)
// 문자열만 가지는 배열
let fruits: string[] = ["Apple", "Banana", "Mango"];

// 숫자만 가지는 배열
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];

// Interface (인터페이스)
interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}
let userArr: IUser[] = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];
