[오답노트];

function solution(participant, completion) {
  let answer;
  for (let i = 0; i < completion.length; i++) {
    let answer = participant.filter((item) => item !== completion[i]);
    console.log(answer);
  }
  return answer;
}

["이유: 반복문 내부에 있으니 한개의 값만 제거되고 일정한 값이 나오지 않는다."];

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    const index = participant.indexOf(completion[i]);
    if (index !== -1) {
      participant.splice(index, 1);
    }
  }
  return participant[0];
}
정확성: 58.3;
효율성: 0.0;
합계: 58.3 /
  (100.0)["이유: 정답은 맞지만 문제 풀이 시간이 오래 걸리기 떄문에 시간 초과."];

function solution(participant, completion) {
  completion.forEach((element) => {
    participant.splice(participant.indexOf(element), 1);
  });
  return participant[0];
}
정확성: 58.3;
효율성: 0.0;
합계: 58.3 /
  (100.0)["이유: 정답은 맞지만 문제 풀이 시간이 오래 걸리기 떄문에 시간 초과."];
