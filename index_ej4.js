
// 4.1. 

const button_41 = document.createElement("button")
button_41.id = "btnToClick"

button_41.addEventListener('click', (event) => {
    console.log(event)
})
document.body.appendChild(button_41);


// 4.2. 

const focus_42 = document.querySelector('.focus')
focus_42.addEventListener('focus', (event) => {
    console.log(event.target.value) 
})


// 4.3. 

const input_43 = document.querySelector('.focus')
input_43.addEventListener('input', (event) => {
    console.log(event.target.value) 
})
