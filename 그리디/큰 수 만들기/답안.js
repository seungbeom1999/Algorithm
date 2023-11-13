function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join("");
}
// [오답 참고용]
// let string = number.split("")
// let array = string.sort((a,b)=>b-a)
// let solve = array.splice(0,number.length-k).join("")
// return String(solve)
