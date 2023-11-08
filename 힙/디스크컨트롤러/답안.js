function solution(jobs) {
  let answer = 0;
  let j = 0;
  let time = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  const solutionArray = [];
  while (j < jobs.length || solutionArray.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      solutionArray.push(jobs[j++]);
      console.log(solutionArray);
      solutionArray.sort((a, b) => {
        return a[1] - b[1];
      });
      continue;
    }
    if (solutionArray.length !== 0) {
      time += solutionArray[0][1];
      answer += time - solutionArray[0][0];
      solutionArray.shift();
    } else {
      time = jobs[j][0];
    }
  }
  return parseInt(answer / jobs.length);
}
["해석: "];

function solution(jobs) {
  var answer = 0;
  let index = 0;
  let now = 0;
  let sum = 0;
  const length = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);
  const waiting = [];

  while (index < jobs.length || waiting.length > 0) {
    if (index < jobs.length && now >= jobs[index][0]) {
      waiting.push(jobs[index]);
      index += 1;
      waiting.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (!waiting.length) {
      now = jobs[index][0];
    } else {
      const first = waiting.shift();
      sum += now - first[0] + first[1];

      now += first[1];
    }
  }

  answer = Math.floor(sum / length);

  return answer;
}
["해석:"];
