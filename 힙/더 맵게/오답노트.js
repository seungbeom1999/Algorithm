function solution(scoville, K) {
  scoville.sort;
  let count = 0;
  for (let i = 0; i < scoville.length; i++) {
    while (scoville[i] < K) {
      let min = Math.min.apply(null, scoville);
      let CheckMin = scoville.filter((item) => item !== min);
      let SecondMin = Math.min.apply(null, CheckMin);
      let ChangeNumber = min + SecondMin * 2;
      scoville.shift();
      scoville.shift();
      scoville.push(ChangeNumber);
    }
    if (scoville[i] >= K) {
      count++;
    }
  }
  console.log(scoville);
  return count;
}

["이유: splice 관련하여서 문제를 넘겼을때 답안이 제대로 안됐다."];

function solution(scoville, K) {
  scoville.sort;
  let count = 0;
  for (let i = 0; i < scoville.length; i++) {
    while (scoville[i] < K) {
      let min = Math.min.apply(null, scoville);
      let CheckMin = scoville.filter((item) => item !== min);
      let SecondMin = Math.min.apply(null, CheckMin);
      let ChangeNumber = min + SecondMin * 2;
      scoville.shift();
      scoville.shift();
      scoville.unshift(ChangeNumber);
      count++;
    }
  }
  return count;
}

["이유: 런타임 에러가 발생하고 어떤 방식으로 해결해야 하는 문제인것 같다."];

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  console.log(scoville);
  let count = 0;
  for (let i = 0; i < scoville.length; i++) {
    while (scoville[i] < K) {
      let min = Math.min.apply(null, scoville);
      let CheckMin = scoville.filter((item) => item !== min);
      let SecondMin = Math.min.apply(null, CheckMin);
      let ChangeNumber = min + SecondMin * 2;
      scoville.shift();
      scoville.shift();
      scoville.unshift(ChangeNumber);
      count++;
    }
    if (scoville.every((value) => value >= K)) {
      return count;
    } else {
      return -1;
    }
  }
}

["이유: 런타임 에러 및 제출된 작업이 너무 많다고 시간 초과가 나온다."];

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  let count = 0;
  while (scoville[0] < K || scoville[1] < K) {
    let min = scoville.shift();
    let SecondMin = scoville.shift();
    let ChangeNumber = min + SecondMin * 2;
    scoville.unshift(ChangeNumber);
    count++;
    scoville.sort((a, b) => a - b);
  }
  if (scoville.every((value) => value >= K)) {
    return count;
  } else {
    return -1;
  }
}
[
  "이유: 문제에 대한 풀이는 맞는데. 다음의 코드는 런타임 에러 및 시간 초과가 나온다.",
];

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  let count = 0;
  const heap = [];
  for (let scov of scoville) {
    heap.push(scov);
  }

  while (heap.length > 1 && heap[0] < K) {
    const min1 = heap.shift();
    const min2 = heap.shift();
    const newScov = min1 + min2 * 2;
    heap.push(newScov);
    count++;

    heap.sort((a, b) => a - b);
  }

  return heap[0] >= K ? count : -1;
}

[
  "이유: while 반복문 사이에 sort를 쓰니 시간 초과 및 과부화가 오는것 같아서 문제이다.",
];
