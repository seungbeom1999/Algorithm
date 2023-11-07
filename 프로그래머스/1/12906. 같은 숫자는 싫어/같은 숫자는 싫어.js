function solution(arr)
{
    let answer = [];
    let x = arr[0];
    let j = 0;
    let i = 1;
    while(true){
        if(i == arr.length+1){
            break;
        }
        if(x !== arr[i]){
            answer[j] = x;
            j++;
            x = arr[i];
        }i++;
    } 
    return answer;
}