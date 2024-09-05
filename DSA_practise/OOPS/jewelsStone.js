function jewelsStone(jewel,stone){
    let count=0
    for(let i of jewel){
        for(let j of stone){
            if(i===j){
                count++;
            }
        }
    }
    return count
}
let jewels = "aA", stones = "aAAbbbb"
console.log(jewelsStone(jewels,stones))