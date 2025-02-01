// 2.1. 

let nuevo_div = document.createElement('div')
document.body.appendChild(nuevo_div)


// 2.2

let nuevo_div_p = document.createElement('div')
let nuevo_p22 = document.createElement('p')
nuevo_div_p.appendChild(nuevo_p22)
document.body.appendChild(nuevo_div_p)


// 2.3. 

let nuevo_div_6p = document.createElement('div')
for (let index = 0; index < 6; index ++) {
    let nuevo_p_23 = document.createElement('p')
    nuevo_div_6p.appendChild(nuevo_p_23)
}
document.body.appendChild(nuevo_div_6p)


// 2.4. 

let nuevo_p_24 = document.createElement('p')
nuevo_p_24.textContent = 'Soy dinámico!'
document.body.appendChild(nuevo_p_24)


// 2.5. 

let h2_class = document.querySelector('.fn-insert-here')
let text_25 = document.createTextNode('Wubba Lubba dub dub')
h2_class.appendChild(text_25)


// 2.6.

let ul_26 = document.createElement('ul')
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

for (let index = 0; index < apps.length; index ++) {
    let li_26 = document.createElement('li')
    let app = document.createTextNode(apps[index])
    li_26.appendChild(app)
    ul_26.appendChild(li_26)
}
document.body.appendChild(ul_26)


// 2.7. 

let class_27 = document.querySelectorAll('.fn-remove-me')
class_27.forEach(element => element.remove())


// 2.8. 

let divs_28 = document.querySelectorAll('div')
let p_28 = document.createElement('p')
p_28.textContent = 'Voy en medio!'
divs_28[0].parentNode.insertBefore(p_28, divs_28[1])


// 2.9. 

let class_29 = document.querySelectorAll('.fn-insert-here')
class_29.forEach(div => {
    let p_29 = document.createElement('p')
    p_29.textContent = 'Voy dentro!'
    div.appendChild(p_29)
})
