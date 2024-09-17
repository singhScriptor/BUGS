function findDistance(d){
    switch(true){
        case (d>0 && d<100):
            console.log(8)
            break
        case (d>=100 && d<500):
            console.log(10)
            break
        case (d>=500 && d<=800):
            console.log(12)
            break
        case (d>800 && d<1000):
            console.log(14)
            break
        case (d>=1000):
            console.log(16)
            break
        default:
            console.log('Wrong Input')
            break                 
    }
}
findDistance(940)