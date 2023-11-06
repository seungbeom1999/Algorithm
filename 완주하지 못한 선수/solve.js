function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];
    if (a !== b) {
      return a;
    }
  }
}

[
  "해석: 값을 하나만 제출하면 되기 때문에 다음과 같이 비교를 하여 아닐경우 return 문식으로 제출",
];

const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};

[
  "해석: pop의 값을 제거해주면서 가는데 그중 일치하지 않는 것을 가져오는 것이기 때문",
];

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

["해석: 새로운 Map 함수에 값을 추가해주며 양수인 값만 출력하는 방식"];
