const removeFromArray = function(array, ...args) {
    //attempt 1
    // const removeArgs = Array.from(arguments)
    // //loop through removeArgs, for each item remove from the array
    // for (const num of removeArgs){
    //     for (let i = 0; i < array.length; i++) {
    //         let item = array[i];
    //         if (item === num) {
    //             array.splice(i, 1);
    //             i--
    //         }
    //     }
    // }

    // return array;

    //attempt 2 from solution, tried to combine both solutions
    // const removeArgs = Array.from(arguments)
    // let newArray = [];
    // array.forEach(item => {
    //     if(!removeArgs.includes(item)) {
    //             newArray.push(item)
    //         }
    // })
    // return newArray;
    return array.filter(val => (!args.includes(val)))
}

// Do not edit below this line
module.exports = removeFromArray;
