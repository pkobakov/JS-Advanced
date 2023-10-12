class Company{
    constructor(){
        this.departments = {};
    }

    

    addEmployee(name, salary, position, department){
        
        const errorMessage = 'Invalid input!';
        
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error(errorMessage);
        }

        let employee = {name, salary, position};

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){

        let bestDepartment = '';
        let bestAverageSalary = 0;

        for (let dep in this.departments) {
            let employees = Object.values(this.departments[dep]);

            let averageSalary = 0;
            employees.forEach((x) => {
                averageSalary += x['salary'];
            })
            averageSalary /= employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = dep;
            }
        }

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        
        let sortedEmployees = Object.values(this.departments[bestDepartment])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(x => `${x.name} ${x.salary} ${x.position}`);
        
            result += sortedEmployees.join('\n');

        return result;

    }
}