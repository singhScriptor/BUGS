class Employee{
    getInfo(salary,working_hours){
        this.salary = salary;
        this.working_hours = working_hours;
    }
    AddSal(){
        if(this.salary<500){
            this.salary+=10
        }
    }
    AddWork(){
        if(this.working_hours>6){
            this.salary+=5
        }
    }
}
let e1=new Employee()
e1.getInfo(450,8)
e1.AddSal()
e1.AddWork()
console.log(e1.salary)