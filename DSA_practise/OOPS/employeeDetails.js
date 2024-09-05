class Member{
    constructor(name,age,number,address,salary){
        this.name=name
        this.age=age
        this.number=number
        this.address=address
        this.salary=salary
    }
    printSalary(){
        console.log('Salary:',this.salary)
    }

}
class Employee extends Member{
    constructor(name,age,number,address,salary,specialization){
        super(name,age,number,address,salary)
        this.specialization=specialization
    }
    print_Details(){
        console.log("Employee-Name:" +  this.name  +  "specialization:" + this.specialization)
        this.printSalary()

    }
}
class Manager extends Member{
    constructor(name,age,number,address,salary,department){
        super(name,age,number,address,salary)
        this.department=department
    }
    print_Details(){
        console.log("Manager-Name:" + this.name  + "Departement:" + this.department)
        this.printSalary()
    }
}
e1=new Employee('Ram',25,9748849,'patna','$3700','coding')
e1.print_Details()
m1=new Manager('Sita',23,879000,'patna','$4560','human-Resource')
m1.print_Details()