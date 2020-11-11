// function square(x) { return x * x };
// console.log(square(5));

// const squareArrow = x => x * x;
// console.log(squareArrow(8));

// const fullName = "Lucas Alves"

// const getFirstname = (name) => name.split(" ")[0]

// console.log("First name:", getFirstname(fullName));


const zip = function() {
    let args = []
    for (var arg of arguments) { args.push(arg) }
    let minCount = args.reduce((t, e) =>  t && t < e.length ? t : e.length, null)
    return Array.from(Array(minCount).keys()).map((pos) => {
        return args.reduce((obj, array, i) => { return {...obj, [i]: array[pos]} } , {});
    })
}

let nameArray = ["Lucas", "Sophie", "Murilo", "Luana"]
let ageArray = [29, 30, 10]
let country = ["Germany", "Spain", "Brasil", "Brasil."]

const zipped = zip(nameArray, ageArray,country).map(({ 0: name, 1:age, 2:country }) => `${name} is ${age} and lives in ${country}`)

console.log(zipped);

const multiplier = {
    numbers: [4,5,7,8,10],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy)
    }
}

console.log(multiplier.multiply());