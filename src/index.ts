let 이름: string | number = "kim";
//유니온 타입 : string 혹은 number가 들어오게 해줘.

function test(x: number): number {
  return x * 2;
}
// 무조건 파라미터로 number 들어와야 하고 무조건 number로 return 해야한다.

type Member = [number, boolean];
let John: Member = [123, true];
// array에 쓸 수 있는 tuple 타입
// [] 안에 있는 형식을 꼭 맞춰줘야 한다.

class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
