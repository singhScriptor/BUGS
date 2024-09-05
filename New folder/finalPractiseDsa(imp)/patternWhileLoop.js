function printPattern(n){
    let i=0
    while(i<n){
      let str=''
      let j=n 
      while(j>i){
        str+='*'
        j--
      }
      console.log(str)
      i++
    }
    let k=1 
    while(k<=n){
      let str=''
      let l=k
      while(l>0){
        str+='*'
        l--
      }
      console.log(str)
      k++
    }
  }
  let n=5
  printPattern(n)