function maxiWord(sentence){
    let maxi=0
    for(let i=0;i<sentence.length;i++){
        let word=sentence[i].split(' ').length
        maxi=Math.max(maxi,word)
    }
    return maxi
}
let sentence=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maxiWord(sentence))