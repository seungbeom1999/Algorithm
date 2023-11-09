function solution(arr) {
    let Array =[]
    
    for(let i =0; i<arr.length; i++){
        if(arr[i] === 2){
            Array.push(i)
        }
    }
    
    let min = Math.min(...Array)
    let max = Math.max(...Array)
    if(Array.length === 0){
        return [-1]
    } else {
        return arr.slice(min,max+1)
    }
}