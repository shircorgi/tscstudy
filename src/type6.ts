// Literal type (리터럴 타입)

// const: 변하지 않는 값 / let: 변할 수 있는 값을 선언할 때 사용
// const userName1 과 같이 특정값 자체를 타입으로 사용하는 것이 Literal type
// const userName1 = "Bob";
// let userName2 = "Tom";

// type Job = "police" | "developer" | "teacher"

// interface User {
//     name: string;
//     job: Job;
// }

// const user: User = {
//     name: "Bob",
//     job: "student" // error: 명시된 리터럴 타입에 포함되지 않음
//}

//Union type

// interface Car {
//   name: "car";
//   color: string;
//   start(): void;
// }

// interface Mobile {
//   name: "mobile";
//   color: string;
//   call(): void;
// }

// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "car") {
//     gift.start();
//   } else {
//     gift.call();
//   }
// }

// Intersection type

interface Car {
  name: string;
  start(): void;
}

interface Mobile {
  name: string;
  color: string;
  price: number;
}

// 모든 속성을 다 기입해줘야 한다
const mobileCar: Mobile & Car = {
  name: "아무튼짱멋진자동차",
  start() {},
  color: "아무튼짱예쁜색깔",
  price: 1000,
};
