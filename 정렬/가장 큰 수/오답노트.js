function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer;
}
["이유: 0이 있을 가능성을 포함하지 못하고 제출했기에"];

function solution(numbers) {
  let answer = numbers.toString().split("");
  let solve = answer.filter((item) => item !== ",");
  let Numbers = solve
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  return Numbers;
}
["이유: 한자리씩 짤라서 계산해보니 가장 큰수는 맞아도 원하는 답이 아니다."];
