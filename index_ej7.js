const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div_7 = document.querySelector('[data-function="printHere"]')
let ul_7 = document.createElement('ul')

for (const place of places) {
    let li_7 = document.createElement('li')
    li_7.textContent = place
    ul_7.appendChild(li_7)
}
div_7.appendChild(ul_7)
