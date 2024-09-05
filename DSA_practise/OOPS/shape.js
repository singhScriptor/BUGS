class shape{
    printShape(){
        console.log("This is shape")
    }

}
class Rectangle extends shape{
    print(){
        console.log('This is rectangle')
    }
}
class circle extends shape{
    print(){
        console.log('This is circle')
    }
}
class square extends Rectangle{
    printSquare(){
        console.log('Square is rectangle')
    }
}

let sq=new square()
sq.printSquare()
sq.print()
sq.printShape()