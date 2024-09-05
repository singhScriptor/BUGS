function lastWordLength(sentence){
    sentence=sentence.trim()
    let count=0
    for(let i=sentence.length-1;i>0;i--){
        if(sentence[i]===' '){
            break
        }
        else{
            count++
        }
    }
    return count
}
let s="Hello World"
console.log(lastWordLength(s))