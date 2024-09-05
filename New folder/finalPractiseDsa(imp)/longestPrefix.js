function longestPrefix(arr){
    if(arr.length===0)return ''
    arr.sort()
    let first=arr[0]
    let last=arr[arr.length-1]
    let ans=0
    while(ans<first.length && ans<last.length && first[ans]===last[ans]){
        ans++
    }
    return first.substring(0,ans)
}
let Input=["flower", "flow", "flight"]
console.log(longestPrefix(Input))