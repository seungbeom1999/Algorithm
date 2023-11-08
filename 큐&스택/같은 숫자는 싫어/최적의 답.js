function solution(arr) {
  let answer = [];
  let x = arr[0];
  let j = 0;
  let i = 1;
  while (true) {
    if (i == arr.length + 1) {
      break;
    }
    if (x !== arr[i]) {
      answer[j] = x;
      j++;
      x = arr[i];
    }
    i++;
  }
  return answer;
}

[
  "해석: 큐의 방식을 제대로 활용하였으며 하나씩 비교해가며 해석해 나아가는 방식",
];
