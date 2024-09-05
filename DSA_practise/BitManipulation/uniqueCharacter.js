function uniqueCharacter(word){
    let char={}
    for(let i of word){
        if(char[i]){
            char[i]++
        }
        else{
            char[i]=1
        }
    }
    for(let i=0;i<word.length;i++){
        if(char[word[i]]===1){
            return i
        }
    }
    return -1

}
let word='programming'
console.log(uniqueCharacter(word))