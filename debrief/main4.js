
class Salary {
    constructor(days, rate) {
        this.days = days;
        this.rate = rate;
    }
    calcSalary() {
        return (this.days * this.rate)
    }
}


const Michael = new Salary(5, 400)
console.log(Michael.calcSalary())

class SallySalary extends Salary {
    constructor(days, rate) {
        super(days, rate);
    }
    calcSalary() {
        return ('this is Sally' + ' ' + this.days * this.rate)
    }
}

const SalarySally = new SallySalary(5, 500)
console.log(SalarySally.calcSalary());

