// function scoreGrade(score){
//     let arr=[]
//     for(let i=0;i<score.length;i++){
//         if(score[i]<=50){
//             arr.push( 'D');
//         }    
//         else if(score[i]>50 && score[i]<60){
//             arr.push("C")
//         }
//         else if(score[i]>=60 && score[i]<=75){
//             arr.push("B")
//         }
//         else if(score[i]>75){
//             arr.push('A');
//         }    
//         //else arr.push("F")
//     }
//     return arr
// }
// let score=[45,58,70,80]
// console.log(scoreGrade(score))

function findMax(a,b){
    return a>b ? a : b
}
let a=5
let b=3
console.log(findMax(a,b))