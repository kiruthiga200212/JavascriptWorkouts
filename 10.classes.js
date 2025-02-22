
//normal class with constructor and passing proteries values
class Agent {
    constructor(name,id){
        this.name = name;
        this.id = id
    }
    addingAge(age){
        this.age = age;
        
    }
    agentDetails(){
        return `Id number is ${this.id} ${this.name} and  his age is ${this.age}`

    }
}

let companyDetails = new Agent("jeff",101)
companyDetails.addingAge(25);
console.log("processing...")
console.log(companyDetails.agentDetails())


//using getter and setter

    class Storagebox{

        constructor(width){
            this.width = width,
            this.height = width

        }
        get area(){

            return this.height * this.width       
            
        }
        set area (area){
            this.width = Math.sqrt(area)
            this.height = this.width
            
        }

    }
    let box1 = new Storagebox(3)
    console.log(box1.area)

    box1.area = 25
    console.log(box1.area)


// static method in obj
class obj {
    constructor(breakfast,lunch,dinner){
        this.breakfast = breakfast
        this.lunch = lunch
        this.dinner = dinner
    }
     static menu(brunch){
      brunch = this.breakfast + this.lunch
      
        if(brunch !== this.breakfast + this.lunch){
            return `brunch is available  `

        }
        else{
            return `brunch is not available sold OUT!` 
        }

     }
     
    
}

const newObj = new obj(["dosa","idly"],["briyani","curd rice"],["Phulka","chapathi"])
console.log(obj.menu(newObj))


//class extends and inheritance

//2.

//let us consider the programmer with how many years of experiance 

class Codingcompany{
    constructor(name,age,id){
         this.name = name
         this.age= age
         this.id = id
    }
greeting(){
    return `Welcome ...${this.name}! Your empolyee Id is ${this.id} ` 
}

}
/// extends  as a constructor 
class programmer extends Codingcompany {
    constructor(name,age,id,yearsofExperience){
        super(name,age,id)
        this.yearsofExperience = yearsofExperience
       
    }
   
    intro(){
        return `Hii am ${this.name} and my age is ${this.age} also ${this.yearsofExperience}  year experience worked in this coding Company` 
    }
    exEmp(){
        return `Hii Am ${this.name} Ex-employee of Coding Company ... with ${this.yearsofExperience} Experience`
    }

    
}

const activeProgrammer = [ new programmer("Alex",54,101,8),
                           new programmer("Nick",54,123,1),
                           new programmer("Jhon",25,1024,5)]

const deactiveProgrammer = [new programmer ("Danial",34,1097,2),
                            new programmer("Jack Neows",45,1134,4),
                            new programmer("Hazel",45,1134,3),
                            new programmer("Ken Vinc",45,1134,3)
                        ]

// function activeUser(activeProgrammer,deactiveProgrammer){
//     let newactiveUser = []
//     let empolyeeName = []
//     let deactiveuser = []
   
//     for(let programmer of activeProgrammer){
//         empolyeeName.push(console.log("ACTIVE USER :" + programmer.name))
//         if(programmer.yearsofExperience > 2){
//             newactiveUser.push(programmer)
//             console.log("Skilled and experienced Active Programmers:");
//             console.log(programmer.intro()); 
//         }
//         else{
//             newactiveUser.push(programmer)
//             console.log("Less than two years of experience Programmers:");
//             console.log(programmer.intro()); 
//         }
       
    

//     }
//     for(let programmer of deactiveProgrammer){
//         console.log()
//         if(programmer.yearsofExperience > 2){
//             newactiveUser.push(programmer)
//             console.log("Skilled and experienced Ex- empolyee:");
//             console.log(programmer.intro()); 
//         }
//         else{
//             deactiveuser.push(programmer)
//             console.log("Less than two years of experience deActivate Programmers:");
//             console.log(programmer.intro()); 
//         }

//     }


   

// }
// activeUser(activeProgrammer,deactiveProgrammer)



//polymorphism 


class Poly{
    constructor(name,jobTitle){
        this.name = name
        this.jobTitle = jobTitle

    }

    job(){
        console.log(`My name is ${this.name} and am working as a ${this.jobTitle}`)
    }
}

class Myself extends Poly {
    constructor(name,jobTitle){
        super(name,jobTitle)

    }
    job(){
        console.log(`My name is ${this.name} and am working as a ${this.jobTitle}`)
        console.log( `Now ${this.name} retired... ` )
    }
}
const print1 = new Poly("lucy","engineer")
const print2 = new Myself("sugan", "Developer")


print1.job()
print2.job()





