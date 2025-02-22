class Student{
    constructor(name,id){
        this.name= name
        this.id = id
    }

    get studentDetails(){
        return `My name is ${this.name} and my student ID: ${this.id} i need a professor for ${this.subject} subject.`

    }

    
    set studentDetails(subject){
        this.subject = subject

    }
}


class Professor extends Student{
   constructor(name,subject) {
    super(name,null,null)
        this.subject = subject
    }
   
    professorDetails(){
        return `I am  professor ${this.name} and Am taking ${this.subject}`
    }

}

const profeesorInfo = new Professor("sathyanarayanan")
const studentInfo = new Student("sofie",101,"Maths")
studentInfo.studentDetails = "Maths"
console.log(studentInfo.studentDetails)
profeesorInfo.subject = studentInfo.subject;
console.log(profeesorInfo.professorDetails())





//setter and getter 
// inheritance
//polymorphism
//static classes
