//함수

// function hello(name: string, age?: number): string {
//   if (age !== undefined) {
//     return `Hello, ${name}. You are ${age}.`;
//   } else {
//     return `Hello, ${name}`;
//   }
// }

// console.log(hello("Sam"));
// console.log(hello("Sam,30"));

// 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없다.
// function hello(age?: number, name: string ): string {
//     if (age !== undefined) {
//       return `Hello, ${name}. You are ${age}.`;
//     } else {
//       return `Hello, ${name}`;
//     }
//   }

//   console.log(hello("Sam"));
//   console.log(hello("Sam,30"));

// 만약 사용하고 싶다면...
// age 혹은 undefined를 가져오도록 명시한다.
// function hello(age: number | undefined, name: string): string {
//   if (age !== undefined) {
//     return `Hello, ${name}. You are ${age}.`;
//   } else {
//     return `Hello, ${name}`;
//   }
// }

// console.log(hello(30, "Sam"));
// console.log(hello(undefined, "Sam"));
