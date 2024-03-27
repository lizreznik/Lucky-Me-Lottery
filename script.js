// create an array to store names
const namesArray = []

function addName () {
    const nameInput = document.getElementById('nameInput') // storing name input element as a variable
    const name = nameInput.value.trim() // get the TRIMMED value of the input box and store it as a variable

    namesArray.push(name) // add the name to the end of the array
    displayNames() // call the displayNames function to update the list

    nameInput.value = '' // clear the input field after adding the name 

    // if (nameInput === null) {
    //     document.getElementById('addName').innerText = 'Please ask a question!'
    //     document.getElementById('addName').classList = ' text-danger'
    //     return
    // }

    // if (!question.trim()) {
    //     alert('Please enter a valid question!')
    //     return
    // }
}


function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items 

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }
}


function pickRandomName(){
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //select random name from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]


    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames();
}


// Event listener for the button to click to add a name to the list
document.getElementById('addNameBtn').addEventListener('click', addName)

//Event listener for the button click to select and display a random name 
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)

