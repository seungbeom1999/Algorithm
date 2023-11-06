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
  "이유: 가독성이 좋게 메소드를 활용하여 읽기 편하고 break문을 활용하여 추가 작업 없게 방지",
];
