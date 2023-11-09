function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

[
  "해석: sort 메소드를 사용하면서 값의 합계들을 비교하면서 큰 값을 앞으로 우선시 한 조건",
  "해석: 어떤 풀이를 해도 정렬 과정에서는 시간복잡도가 안좋기 떄문에 풀이 방법에 대한 차이점은 없다.",
];
