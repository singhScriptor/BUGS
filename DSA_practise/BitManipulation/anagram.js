function anagram(s1,s2){
    if(s1.length !== s2.length)return false;
    return s1.split('').sort().join('')===s2.split("").sort().join('')

}
let s1="abcd"
let s2='acdb'
let output=anagram(s1,s2)
if(output)console.log( true)
else{
  console.log( false)
}  
