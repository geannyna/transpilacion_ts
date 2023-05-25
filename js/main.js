// let userName: string;
// let age: number;
// let adult:boolean;
var learningForm = /** @class */ (function () {
    function learningForm(name, surname, email, phone, birthDate, course, learningCenter) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
        this.course = course;
        this.learningCenter = learningCenter;
    }
    learningForm.prototype.setName = function (name) {
        this.name = name;
    };
    learningForm.prototype.getName = function () {
        return this.name;
    };
    learningForm.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    learningForm.prototype.getSurname = function () {
        return this.surname;
    };
    learningForm.prototype.setEmail = function (email) {
        this.email = this.email;
    };
    learningForm.prototype.getEmail = function () {
        return this.email;
    };
    learningForm.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    learningForm.prototype.getPhone = function () {
        return this.phone;
    };
    learningForm.prototype.setBirthDate = function (birthDate) {
        this.birthDate = birthDate;
    };
    learningForm.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    learningForm.prototype.setCourse = function (course) {
        this.course = course;
    };
    learningForm.prototype.getCourse = function () {
        return this.course;
    };
    learningForm.prototype.setLearningCenter = function (learningCenter) {
        this.learningCenter = learningCenter;
    };
    learningForm.prototype.getLearningCenter = function () {
        return this.learningCenter;
    };
    return learningForm;
}());
var alumnData = new learningForm('Maria', 'Garcia', 'mariagarcia@gmail.com', '+34689776874', new Date('2000-03-23'), 'Curso php', 'Bootcamp El genio');
console.log(alumnData.getName());
console.log(alumnData.getSurname());
console.log(alumnData.getBirthDate());
console.log(alumnData.getLearningCenter());
