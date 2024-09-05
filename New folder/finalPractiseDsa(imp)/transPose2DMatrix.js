function transpose2DMatrix(row,column,matrix){
    let arr=[]
    for(let i=0;i<row;i++){
        let jrr=[]
        for(let j=0;j<column;j++){
            jrr.push(matrix[j][i])
        }
        arr.push(jrr)
    }
    return arr
}
let row=3
let column=3
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(transpose2DMatrix(row,column,matrix))