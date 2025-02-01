
let ul_5 = document.createElement('ul')
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

for (const album of albums) {
    let li_5 = document.createElement('li')
    li_5.textContent = album
    ul_5.appendChild(li_5)
}
document.body.appendChild(ul_5)