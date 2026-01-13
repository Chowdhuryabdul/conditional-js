var friendsAge = [11, 12, 12, 13, 14, 13, 14, 15, 16]
// var freindNumber = [20, 40, 60]
// friendsAge[3] = 40
// var positionIndex = friendsAge.indexOf(13);
// friendsAge.push(19)
// friendsAge.pop()
// var find = friendsAge.includes(11)
// const merge = friendsAge.concat(freindNumber);
// const cut = friendsAge.slice(1, 3)
// const splice = friendsAge.splice(2, 1)

function removeDuplicates(numbers){
    const reserveArray = [];
    for(let i = 0; i < friendsAge.length; i++){
        const element = numbers[i]
        if(reserveArray.includes(element) === false){
            reserveArray.push(element)
        }
    }
    return reserveArray
}
const ageNumbers = removeDuplicates(friendsAge);
// console.log(ageNumbers);

const theNumbers = [11, 100, 200, 300, 300, 200, 100, 400, 400, 555, 555]

function removeDuplicatess(x){
    const reserveArray = [];
    for(let i = 0; i < theNumbers.length; i++){
    const element = theNumbers[i];
    if(reserveArray.includes(element) === false){
        reserveArray.push(element)
    }
    }
    return reserveArray
}
const calledNumber = removeDuplicatess(theNumbers)
// console.log(calledNumber);

const mainNumbers = [1, 2, 2, 3, 3, 4, 4, 5, 5];
function findRepeatedNumbers(number){
    const vacantArray = [];
    for(let i = 0; i < mainNumbers.length; i++){
        const element = mainNumbers[i];
        if(vacantArray.includes(element) === false){
            vacantArray.push(element)
        }
    }
    return vacantArray
}

const theDuplicateNumbers = findRepeatedNumbers(mainNumbers);
// console.log(theDuplicateNumbers);


const addiingNumber = [12, 13, 14];
// console.log(addiingNumber.indexOf(13));
console.log(addiingNumber.slice[1, 2]);

