class Employee{
    constructor(name,birth_date,address){
        this.name = name;
        this.birth_date = birth_date;
        this.address = address;
    }
    printDetails(){
        console.log("Name:"+ this.name + "Birth-date:"+ this.birth_date + "address:" + this.address)

    }
}
let e=new Employee("Robert",1994,"64C-WallsStreet");
let e2=new Employee("Same",2000,'68D-WallsStreet')
let e3=new Employee("john",1999,'26B-WallsStreet')
e.printDetails();
e2.printDetails();
e3.printDetails();