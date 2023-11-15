//1
const main = document.getElementById('main')
main.remove()
console.log(main)

//2
const newHeader = document.createElement('h1')
console.log(newHeader)

//3

newHeader.id = "victory"
newHeader.textContent = "Tyler is the champion"

console.log(newHeader)