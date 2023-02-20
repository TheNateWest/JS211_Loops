// Use a do...while loop to console.log the numbers from 1 to 1000.
const countToThousand = () => {
    let count = 1;
    do {
        console.log(count);
            count ++
    } while ( count <= 1000)
}

// countToThousand()


// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    FirstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"

}

// Create a function that logs out the keys of the object using Object.keys().

const personKeys = () => {
    console.log(Object.keys(person));
}

// personKeys () ****************************


// Create a function that logs out the keys and values of the object using Object.entries().
const personKeyValues = () => {
for (const [key, value] of Object.entries(person)) {
    console.log(`The key is ${key}: and the value is ${value}`);
    }
}

personKeyValues()
// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Change the values to reflect multiple people you might have in your database.
const arrayOfPersons = [
    {
        FirstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    
    },
    {
        FirstName: "Nate",
        lastName: "West",
        birthDate: "Jan 1, 2012",
        gender: "male"
    
    },
    {
        FirstName: "Your",
        lastName: "Mom",
        birthDate: "Apr 20, 1969",
        gender: "female"
    
    },{
        FirstName: "Elton",
        lastName: "John",
        birthDate: "Mar 25, 1947",
        gender: "male"
    
    }
]


// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.
const oddBirthYears = () => {
    for ( const peep of arrayOfPersons) { // peep can be named anything, just be consistent
        let birthYear = peep.birthDate.slice(-4) // just need the last number of the birthDate, so what's a way to get that?
            // check if the number is even or odd with % 
            // if the % 2 == 1, it's an odd year, so console.log that birthDate

            // console.log(birthYear);
        if (birthYear % 2 == 1) {
            console.log(peep.FirstName + "'s birthday is " + peep.birthDate);
        }

        // console.log(birthYear % 2);
    }
}

oddBirthYears()
// Use .map() to map over the arrayOfPersons and console.log() their information.
// let newPeople = arrayOfPersons.map(
//     const person => console.log(`Name: ${person.firstName}`)
// )

arrayOfPersons.map((peep) => {
    console.log(`Name: ${peep.FirstName} ${peep.lastName}`)
    console.log(`Birthday: ${peep.birthDate}, Gender: ${peep.gender}`)
})

// Use .filter() to filter the persons array and console.log 0only males in the array.

let men = arrayOfPersons.filter((peep) => peep.gender === "male")

console.log(men)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const oldBirthday = (peep) => {
    // Check if birthday is from 1989 or earlier
    let birthYear = peep.birthDate.slice(-4)

    if (birthYear < 1990) {
        return true
    }

}

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let oldPeople = arrayOfPersons.filter(oldBirthday)

console.log(oldPeople);

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

// Compare years from input date and current date
// if exactly 21 year difference, compare months

console.log(Date())
console.log(new Date())
// BONUS - .filter() out the people in the array who are younger than 21.

// Pt. 2 - From Scratch .find() & .findIndex()

