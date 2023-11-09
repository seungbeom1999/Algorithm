function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

[
  "sort 메소드를 사용하면서 값의 합계들을 비교하면서 큰 값을 앞으로 우선시 한 조건",
];
