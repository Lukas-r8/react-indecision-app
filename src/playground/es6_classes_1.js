class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
       return `Hello this is ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, course) {
        super(name, age)
        this.course = course;
    }

    getDescription() {
        let desc = super.getDescription()

        if (this.hasMajor()) {
            desc += ` their major is ${this.course}`
        }

        return desc
    }

    hasMajor() {
        return !!this.course
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    sayHello() {
        let locationGretting = !!this.homeLocation ? ` I come from ${this.homeLocation} I am ${this.age}` : ''

        return super.sayHello() + locationGretting
    }
}



const me = new Person("Lucas Alves", 30);

// console.log(me);
// console.log(me.getDescription());
// console.log(me.sayHello());

const student = new Student("Lucas Alves", 30, "dev");
console.log(student.getDescription());
console.log("has major", student.hasMajor());

const traveller = new Traveler("Lucas", 30, "Brazil")
console.log(traveller.sayHello())