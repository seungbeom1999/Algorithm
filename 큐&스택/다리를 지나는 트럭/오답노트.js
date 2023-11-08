function solution(bridgeLength, weight, truckWeights) {
  let answer = [];
  let i = 1;
  let j = 0;
  if ((truckWeights.length = 1)) {
    return weight + 1;
  }
  while (weight >= truckWeights || answer.length == truckWeights.length) {
    //2개의 무게 합계가 다리보다 작으면 1초 감소
    for (let time = 0; time < truckWeights.length; time++) {
      if (truckWeights[i] + truckWeights[i + 1] < weight) {
        j - i;
      } else {
        j + bridgeLength;
        answer.push(truckWeights[i]);
      }
      answer.lenth == truckWeights.length;
      break;
    }
  }
  return j;
}

["이유: 결과 값이 제대로 나오지가 않으며 문제에대한 해석이 잘못된 방식 같음.."];
