class objectCount{
    static count=0
    constructor(){
        objectCount.count++
    }
    static printCount(){
        console.log(objectCount.count)
    }
}
let l1=new objectCount(1)
let l2=new objectCount(2)
let l3=new objectCount(3)
let l4=new objectCount(4)
objectCount.printCount()