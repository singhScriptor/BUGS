class triangle{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c
    }
    calculateArea(){
        let area=this.a*this.b*this.c
        console.log('Area of triangle is:',area)
    }
    calculatePerimeter(){
        let perimeter=this.a+this.b+this.c
        console.log('Perimeter of triangle is :',perimeter)
    }
}
let t=new triangle(2,3,4)
t.calculateArea()
t.calculatePerimeter()