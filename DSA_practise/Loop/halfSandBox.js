// function printPattern(n){
//     let i=0
//     while(i<n){
//         let str=''
//         let j=n-i
//         while(j>0){
//             str+="*"
//             j--
//         }
//         console.log(str)
//         i++
//     }
//     let k=0
//     while(k<n){
//         let str=''
//         let l=k 
//         while(l>=0){
//             str+='*'
//             l--
//         }
//         console.log(str)
//         k++
//     }
    
// }
// let n=5
// printPattern(n)


function forloopPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+="*"
        }
        console.log(str)
    }
    for(let k=0;k<n;k++){
        let str=''
        for(let l=0;l<k+1;l++){
            str+='*'
        }
        console.log(str)

    }    
}
let s=5
forloopPattern(s);