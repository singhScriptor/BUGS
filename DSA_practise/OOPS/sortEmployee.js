class Employee{
    constructor(name,salary){
        this.name = name;       
        this.salary = salary;
    }
    printSalary(){
        console.log(`Name: ${this.name} , Salary: ${this.salary}`)
    }
}
function sortEmployee(emp){
    emp.sort((a,b)=>a.salary-b.salary);
}
let emp=[
    new Employee("Sohan",575),
    new Employee("Mohan",348),
    new Employee('Gopal',879),
    new Employee('Rohan',256)
]
sortEmployee(emp);
emp.forEach(e=>e.printSalary())