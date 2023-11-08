function solution(jobs) {
    let answer = 0;
    let j = 0;
    let time = 0;
    jobs.sort((a,b)=> a[0] -b[0])
    const solutionArray = []
    while(j < jobs.length || solutionArray.length !== 0 ){
        if (jobs.length > j && time >= jobs[j][0]) {
      solutionArray.push(jobs[j++]);
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
    return parseInt(answer / jobs.length);;
}