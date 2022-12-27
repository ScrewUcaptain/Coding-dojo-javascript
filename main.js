 module.exports = {
    palindromeChecker: function(s) {
        // Your code goes here
        const stringReverser = str => str.split('').reverse().join('')
        
        const regex = /[^a-zA-Z]/g
        s = s.replace(regex, "").toLowerCase()
        let str = stringReverser(s)




        return s === str //something
    }
 }