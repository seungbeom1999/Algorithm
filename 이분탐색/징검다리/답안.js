function solution(distance, rocks, n) {
  // 지우는 갯수와 돌의 갯수를 치우면 최솟값
  if (rocks.length === n) return distance;
  //바위의 최솟값과 최댓값의 숫자를 집어넣기.
  rocks = [0, ...rocks.sort((a, b) => a - b), distance];

  let answer = [];
  let start = 0;
  let end = distance;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let remove = 0;
    let prev = 0;

    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) {
        remove++;
      } else {
        prev = rocks[i];
      }
    }

    if (remove > n) {
      // 중간위치보다 높을 경우 감소시키기
      end = mid - 1;
      answer.push(end);
    } else {
      // 중간위치보다 낮을 경우 증가시키기
      start = mid + 1;
    }
  }
  return Math.min(...answer);
}
