function transpose(matrix,rows,col){
    let arr=[]
    for(let i=0;i<rows;i++){
        let jrr=[]
        for(let j=0;j<col;j++){
            jrr.push(matrix[j][i])
        }
        arr.push(jrr)
    }
    return arr
}
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
let row=3 
let col=3 
console.log(transpose(matrix,row,col))