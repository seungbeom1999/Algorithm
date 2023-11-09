function solution(citations) {
  citations.sort((a, b) => b - a);
  let count = 0;
  while (count + 1 <= citations[count]) {
    count++;
  }
  return count;
}

[
  "해석: 정렬에서는  어떤 풀이를 해도 시간 복잡도가 동일하기에 알고리즘으로 잘 활용 안한다..",
];
