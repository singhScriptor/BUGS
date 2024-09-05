class Student{
    constructor(name,rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }
    printAttributes(){
        console.log("My name is:",this.name);
        console.log("My rollNumber is:",this.rollNumber)
    }
}
s=new Student('Rajesh',23);
s.printAttributes()