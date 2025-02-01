 
 // 3.1.

let ul_31 = document.createElement('ul')
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

for (const country of countries) {
    let li_31 = document.createElement('li')
    let text_31 = document.createTextNode(country)
    li_31.appendChild(text_31)
    ul_31.appendChild(li_31)
}
document.body.appendChild(ul_31)


// 3.2. 

let class_32 = document.querySelector('.fn-remove-me')
class_32.remove()


// 3.3. 

let ul_33 = document.createElement('ul')
let div_33 = document.querySelector('[data-function="printHere"]')
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

for (const car of cars) {
    let li_33 = document.createElement('li')
    let text_33 = document.createTextNode(car)
    li_33.appendChild(text_33)
    ul_33.appendChild(li_33)
}
div_33.appendChild(ul_33)


// 3.4. 

const countries_34 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries_34) {

    let div_34 = document.createElement('div')
    let h4_34 = document.createElement('h4')
    h4_34.textContent = country.title
    
    let img_34 = document.createElement('img')
    img_34.src = country.imgUrl
    
    div_34.appendChild(h4_34)
    div_34.appendChild(img_34)
    
    document.body.appendChild(div_34)
}


// 3.5. 

let button_35 = document.createElement('button')
button_35.textContent = 'Eliminar último div'
document.body.appendChild(button_35)

button_35.addEventListener('click', () => {
    let divs = document.querySelectorAll('div')
    if (divs.length > 0) {
        divs[divs.length - 1].remove() 
    }
})


// 3.6. 

const divs_36 = document.querySelectorAll("div")

for (const div of divs_36) {

    const button = document.createElement("button");
    button.textContent = "Elimíname!"
    
    button.addEventListener("click", (i) => {
        i.target.parentElement.remove(); // Eliminar el div que contiene el botón
    });
    
    // Añadir el botón dentro del div
    div.appendChild(button);
}
