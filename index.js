function countDown(num){
    let count = num
    while (count>=0){
        console.log(count)
        count--
    }
}
countDown(10)
function writeCards(names, event){
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        newArr.push(message)
    }
    return newArr
}