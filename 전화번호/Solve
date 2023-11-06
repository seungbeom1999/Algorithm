[답안];

function solution(phoneBook) {
  phoneBook.sort();
  let solve = true;

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i + 1].indexOf(phoneBook[i]) === 0) {
      solve = false;
      break;
    }
  }

  return solve;
}
[
  "해석: sort를 사용하여 값이 일치하게 만들어 주었으며 i+1에서 i가 있다면 0을 배출할 것이기 때문에 조건문을 사용해 값을 지정해준다.",
];
function solution(phoneBook) {
  phoneBook.sort();

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i] === phoneBook[i + 1].substring(0, phoneBook[i].length)) {
      return false;
    }
  }

  return true;
}

["해석: sort를 사용하여 접두사가 될수 있게 세팅 후, substring를 통해 풀이"];

function solution(phoneBook) {
  phoneBook.sort();

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i + 1].startsWith(phoneBook[i])) {
      return false;
      break;
    }
  }

  return true;
}
[
  "해석: sort를 사용하여 접두사가 될수 있게 정리 후 startsWith를 통해 풀이 후 brake를 사용하여 추가 작업 방지",
];
