class Student{
    constructor(name, email, community){
        this.name = name;
        this.email  = email;
        this.community  = community;
    }
};

class Bootcamp{
    constructor(name, level, studentA = []){
        this.name = name;
        this.level  = level;
        this.students  = studentA;
    }
    registerStudent(student){
        var checkStudent = this.students.filter(user => user.email === student.email);
        if(checkStudent === student.email){
            //Reference the Bootcamp class Students Array to see if the student is already registered
            console.log(`${student} already exists in bootcamp.`);
        }else{
            //pass student directly into bootcamp
            this.students.push(student);
            console.log(` Registering  ${student.email}  to the bootcamp Web Dev Fundamentals.`);
        }
        
        //debug statement
       // console.log(`check:  ${this.students.filter(user => user.email)} student.name: ${student.email}`)
        return this.students;
    }
};

/*
const gameCamp= new Bootcamp("WebGL","beginner");
const student1= new Student("Jimbo","jimothy@email.com","Bay Area");
const student2= new Student("Mike","micycle@email.com","Florida");
const student3= new Student("Ev","everlast@email.com","Unknown");
gameCamp.registerStudent(student1);
gameCamp.registerStudent(student2);
gameCamp.registerStudent(student3);
*/
