module.exports = {
    falsyBouncer: function(arr) {
        // your code goes here
        if(arguments.length === 0) return []

        return arr.filter(Boolean)
        return arr // or something else who knows ? 
    }
}