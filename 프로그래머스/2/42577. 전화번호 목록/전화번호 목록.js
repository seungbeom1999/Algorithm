function solution(phoneBook) {
    phoneBook.sort()
    
  for(let i = 0; i < phoneBook.length - 1; i++) {
        if(phoneBook[i] === phoneBook[i+1].substring(0,phoneBook[i].length)){
         return false;
      }
    }

  return true;
}