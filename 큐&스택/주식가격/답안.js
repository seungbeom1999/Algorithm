[답안];
function solution(prices) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    let time = 0;
    for (let j = i + 1; j < prices.length; j++) {
      time++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    result.push(time);
  }

  return result;
}
[
  "해석: time으로 시간이 지나갈때마다 카운트를 해주고 숫자가 같으면 멈춰서 push 문을 작동한다.",
];

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      answer[i]++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }

  return answer;
}

[
  "fill문을 사용하여 length의 숫자열만큼 배열에 0을 넣어주고 값들을 ++해줘서 작동",
];
