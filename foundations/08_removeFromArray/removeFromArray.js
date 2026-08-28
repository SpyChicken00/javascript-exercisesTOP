const removeFromArray = function(array) {
    const removeArgs = Array.from(arguments)
    //loop through removeArgs, for each item remove from the array
    for (const num of removeArgs){
        // array.map((item, index) => {
        //     if (item === num) {
        //         array.splice(index, 1);
        //     }}  )
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (item === num) {
                array.splice(i, 1);
                i--
            }
        }
    }

    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
