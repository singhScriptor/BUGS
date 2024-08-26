function panGram(s){
    const letter=new Set()
    s=s.toLowerCase()
    for(let i of s){
        if(i>='a' && i<='z'){
            letter.add(i)
        }
    }
    return letter.size===26
}
let n='The quick brown fox jumps over the lazy dog'
console.log(panGram(n))