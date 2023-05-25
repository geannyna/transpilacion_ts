// let userName: string;
// let age: number;
// let adult:boolean;

// userName = 'Juan';
// age = 40;
// adult = true;
// type ageData = number | string | null;

// // console.log(userName);
// // console.log(age);
// // console.log(adult);

// function getMessage(age:ageData):string{
// if(typeof age ==='number'){
//   return 'su edad es: '+Math.floor(age);
// }else if(typeof age ==='string'){
//   return 'su edad es '+ age;
// }else{
//   return 'El valor de edad es incorrecto';
// }


// }
// console.log(getMessage(40.33));
// console.log(getMessage('Cuarenta y cinco '));
// console.log(getMessage(null));

// ehjercicio 3

// creamos una interface de form
interface Form{
  name: string;
  surname: string;
  email: string;
  phone: string;
  birthDate: Date;
}
class learningForm implements Form{
  name: string;
  surname: string;
  email: string;
  phone: string;
  birthDate: Date;
  course: string;
  learningCenter: string;

  constructor(name: string,
    surname: string,
    email: string,
    phone: string,
    birthDate: Date,
    course: string,
    learningCenter: string){
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.birthDate = birthDate;
      this.course = course;
      this.learningCenter = learningCenter;
    }
    setName(name:string):void{
      this.name = name;
    }
    getName(): string{
      return this.name;
    }
    setSurname(surname:string):void{
      this.surname = surname;
    }
    getSurname(): string{
      return this.surname;
    }
    setEmail(email:string):void{
      this.email = this.email;
    }
    getEmail(): string{
      return this.email;
    }
    setPhone(phone:string):void{
      this.phone = phone;
    }
    getPhone(): string{
      return this.phone;
    }
    setBirthDate(birthDate:Date):void{
      this.birthDate = birthDate;
    }
    getBirthDate(): Date{
      return this.birthDate;
    }
    setCourse(course:string):void{
      this.course = course;
    }
    getCourse(): string{
      return this.course;
    }
    setLearningCenter(learningCenter:string):void{
      this.learningCenter = learningCenter;
    }
    getLearningCenter(): string{
      return this.learningCenter;
    }
} 
 let alumnData: learningForm = new learningForm(
      'Maria',
      'Garcia',
      'mariagarcia@gmail.com',
      '+34689776874',
      new Date('2000-03-23'),
      'Curso php',
      'Bootcamp El genio'
    )
console.log(alumnData.getName());
console.log(alumnData.getSurname())
console.log(alumnData.getBirthDate());
console.log(alumnData.getLearningCenter());