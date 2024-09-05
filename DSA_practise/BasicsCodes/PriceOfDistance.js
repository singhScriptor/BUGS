function DistancePrice(D){
    if(D>0 && D<=100)return 5
    else if(D>100 && D<=500)return 8
    else if(D>500 && D<1000)return 10
    else if(D>=1000) return 12
    else return -1
}
let D=700
console.log(DistancePrice(D))