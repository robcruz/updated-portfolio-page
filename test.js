let arr = [1, 1, 2, 2, 3, 3, 4, 4]
let result = arr.filter((element, index) => arr.indexOf(element) === index)
console.log(result)


const removeDupes = array => {
    const newArr = [];

    for(let i = 0; i < array.length; i++){
        // if !newArr.includes(array)
    }

    return newArr;
}

const addArr = array => array.reduce();

addArr([1,2])



const words = [1, 2, 3, 4];
const result = words.filter(word => word % 2 === 0);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



const timesTwo = array => {
    const newArr = [];
    for(let i = 0; i < array.length; i++) newArr.push(array[i] * 2);
    return newArr;
}
console.log(timesTwo([1, 2]))


const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

