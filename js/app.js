function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
}

Student.prototype.showFullName = function() {
    console.log(this.firstName, this.lastName);
}

const student1 = new Student('xx', 'yy');
student1.showFullName();

const student2 = new Student('yy', 'ii');
student2.showFullName();
