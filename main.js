module.exports = {
    arraySum: function(arr) {
        // Your code goes here
        if (arguments.length === 0) return 0

        const charOrNum = element => isNaN(element) ? 0 : +element 

        return arr.reduce((prev, current) => charOrNum(prev) + charOrNum(current))
         //or something else who knows ?
    },
    
    arrayAverage: function(arr) {
        // Your code goes here
        if (arguments.length === 0) return 0
        
        return arr; // or something else who knows ?
    },
    
    arrayMax: function(arr) {
        // Your code goes here
        if (arguments.length === 0) return 0
        
        return arr // or something else who knows ?
    },
    
    arrayMin: function(arr) {
        // Your code goes here
        if (arguments.length === 0) return 0

        return arr // or something else who knows ?
    }
 };