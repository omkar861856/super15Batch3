function Greet(){
    // logic goes here
    // perform some ops on paramenters
    return // value

    // line to execute
}

// regular, anonymous and arrow functions.

// MRF are exensively used to play along with data.
// in for of array of objects.

const Dog = {
    name: "Jimmi", 
    age: 3, 
    greet: function (name){

        // code logic
        console.log("I will sit and stare at your - is my way of greeting a stranger named -" + name)

    }
}

Dog.greet("Josh");


// DRY principles/concept


const myArr = [1,2,3,4,5,6]; // special kind of object


// spread operator

const myRest = [1,2,3,4,...myArr]


// prototype

const array = {

    name: "array", 
    map: function (fn, l){

        for(let i=0; i<l; i++){
            return array[i], i, array
        }

    }

}

const number = {

    name: "array", 
    toFixed: function (fn, l){

        for(let i=0; i<l; i++){
            return array[i], i, array
        }

    }

}

const string = {

    name: "array", 
    trim: function (fn, l){

        for(let i=0; i<l; i++){
            return array[i], i, array
        }

    }

}

const object = {

    name: "array", 
    keys: function (fn, l){

        for(let i=0; i<l; i++){
            return array[i], i, array
        }

    }

}


// map - -es6

const callback = function (...myArr){

    


}

//1 0 [1,2,3,4,5,6]
//2 1 [1,2,3,4,5,6]
//3 2 [1,2,3,4,5,6]
//4 3 [1,2,3,4,5,6]
//5 4 [1,2,3,4,5,6]
//6 5 [1,2,3,4,5,6]

const myArrow = one=>console.log("one return statement")



const mapped = myArr.map(e=>e*2) // function within a function - higher order function.

// [2,4,6,8,10,12]

// Reduce and filter. --> manipulating the data - MRF .

// spreads the array - Shotgun - spreads the bullets.

const newArr = [...myArr];

console.log(newArr)


const myObj = {
    name: "John", 
    age: 40, 
    location:"UK"
}


// DRY - dont repeat yourself

const {name, age} = myObj;

///
//name

//age
//
//name
//



console.log(name, age);

let arr = ["John", "Smith"]

let [firstName, surname] = arr;

// Obj.

// firstName 
// surname 


// JS - snyc part. 

// DOM manipulation and asyc js.




