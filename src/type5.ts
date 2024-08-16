// this 함수

// interface User {
//     name: string;
// }

// const Sam: User = {name: 'Sam'}

// function showName(this:User){
//     // this 에는 형식 주석이 없으므로 암시적으로 'any' 형식이 포함된다.
//     // 따라서, 함수 첫번째 매개변수에 this:(type) 을 입력해야 한다.
//     console.log(this.name)
// }

// const a = showName.bind(Sam);
// a();

interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  // this 에는 형식 주석이 없으므로 암시적으로 'any' 형식이 포함된다.
  // 따라서, 함수 첫번째 매개변수에 this:(type) 을 입력해야 한다.
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");
