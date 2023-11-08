function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

["해석: 일반적으로 답안을 구하는 쉬운 방식이며 코드를 짜는 기본 틀같은 방식"];
