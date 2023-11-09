function solution(citations) {
    citations.sort((a,b)=>b-a)
    let count = 0;
    while(count+1 <= citations[count] ){
        count++
    }
    return count;
}