class PARENT{
    print(){
        console.log("this is parent class")
    }
}
class CHILD extends PARENT{
    print(){
        
        console.log('This is child class')
        super.print()
    }
}
let p=new PARENT()
p.print()
let c=new CHILD()
c.print()