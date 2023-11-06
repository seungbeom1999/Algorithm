[오답노트];

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    let checkList = phone_book[i];
    let Subject = phone_book[i + 1];
    if (Subject.indexOf(checkList)) {
      return true;
    } else return false;
  }
}
["오답 사유: 다음의 문자까지 확인이 가능하며 전체적으로서 확인이 불가능하다."];

function solution(phone_book) {
  let phoneNumberList = phone_book.length;
  for (let i = 0; i < phoneNumberList; i++) {
    let checkList = phone_book[i];
    for (let j = i + 1; j < phoneNumberList; j++) {
      let subject = phone_book[j];
      if (subject.indexOf(checkList) === 0) {
        return false;
      }
    }
  }
  return true;
}
["이유: 로딩시간이 길며, TEST DATA가 많을수록 과부화가 쉽게 걸린다."];

function solution(phone_book) {
  let phoneNumberList = phone_book.length;
  for (let i = 0; i < phoneNumberList; i++) {
    for (let j = i + 1; j < phoneNumberList; j++) {
      if (phone_book[j].startsWith(phone_book[i])) {
        return false;
      }
    }
  }
  return true;
}
["이유: 결과가 나왔는데도 계속 반복이 되어서."];
