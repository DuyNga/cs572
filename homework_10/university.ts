class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

window.onload = function () {
    let c = new University("MUM", "Computer Science");
    c.graduation(2019);
};