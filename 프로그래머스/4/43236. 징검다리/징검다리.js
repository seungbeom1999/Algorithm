function solution(distance, rocks, n) {
    if(rocks.length === n) return distance
  rocks=[0,...rocks.sort((a,b)=>a-b),distance]
  let answer = [];
  let start = 0;
  let end = distance;
  
  while(start <= end) {
    const mid = Math.floor((start+end) / 2);
    let remove = 0;
    let prev = 0;
    
    for(let i = 1; i < rocks.length; i++) {
      if(rocks[i] - prev < mid) {
        remove++;
      } else {
        prev = rocks[i];
      }
    }
    
    if(remove > n) {
      end = mid-1;
      answer.push(mid-1)
    } else {
      start = mid+1;
    }
  }
  return Math.min(...answer);
}