[최적화];

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

["반복문에 대한 활용도가 가장 적으면 문제에 가장 적절한 해결책"];
