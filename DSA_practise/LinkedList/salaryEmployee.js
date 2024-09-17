class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

}
const emp=
[ 
    new Employee("Rajesh",38599),
    new Employee("Ramesh",47399),
    new Employee('Mukesh',34940),
    new Employee('Suresh',283930)

]
emp.sort((a,b)=>a.salary-b.salary);
emp.forEach(e=>console.log(e.name))