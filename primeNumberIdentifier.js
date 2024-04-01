const array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// assingns filter method to the array and those which pass the conitions are returned
const primes = array.filter(
    number=>{
    if(number<=1){
        return false;
    }
    for (let i = 2; i <=Math.sqrt(number); i++) {
        if (number % i===0) {
            return false
        }
        return true
        
    }
})
console.log(primes)