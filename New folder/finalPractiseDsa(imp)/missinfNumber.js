function findMissingNumber(arr){
    let num=[]
    for(let i=0;i<arr.length;i++){
        while(arr[i]!==i){
            num.push(i)
            //i++
    
        }
        

    }
    return num
}

let arr=[9,6,4,2,5,7,0,1]
console.log(findMissingNumber(arr))