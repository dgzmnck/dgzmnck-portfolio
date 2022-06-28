

const pages= document.querySelectorAll('.page');



const p_about= document.querySelector('.about');
const p_myworks= document.querySelector('.myworks');
const p_contact= document.querySelector('.contact');
const p_skills= document.querySelector('.skills');
const p_hello= document.querySelector('.hello');


const btn_myworks = document.getElementById('myworks');
const btn_contact = document.getElementById('contact');
const btn_skills = document.getElementById('skills');
const btn_abouts = document.getElementById('about');
const btn_hello = document.getElementById('hello');

btn_hello.addEventListener('click', function () {
    getJoke();
    let shown = document.querySelector('.shown')
    let halfshown = document.querySelector('.rotatehalf')
    if (p_hello===shown) {
        halfshown.classList.remove('rotatehalf');
        halfshown.classList.add('shown');
p_hello.classList.toggle('shown')
    } else {
        shown.classList.toggle('shown')
        shown.classList.toggle('rotatehalf')
        if ( p_hello.classList.contains('rotate')) p_hello.classList.remove('rotate')
        p_hello.classList.toggle('shown')
    }
 


    })


btn_myworks.addEventListener('click', function () {
let shown = document.querySelector('.shown')

let halfshown = document.querySelector('.rotatehalf')
if (halfshown) {
    halfshown.classList.remove('rotatehalf')
}
shown.classList.toggle('shown')
shown.classList.toggle('rotate')
if ( p_myworks.classList.contains('rotate')) p_myworks.classList.remove('rotate')
p_myworks.classList.toggle('shown')
})


btn_contact.addEventListener('click', function () {
    let shown = document.querySelector('.shown')
    let halfshown = document.querySelector('.rotatehalf')
    if (halfshown) {
        halfshown.classList.remove('rotatehalf')
    }
    shown.classList.toggle('shown')
    shown.classList.toggle('rotate')
    if ( p_contact.classList.contains('rotate')) p_contact.classList.remove('rotate')
    p_contact.classList.toggle('shown')
 })
 btn_skills.addEventListener('click', function () {
    let shown = document.querySelector('.shown')
    let halfshown = document.querySelector('.rotatehalf')
    if (halfshown) {
        halfshown.classList.remove('rotatehalf')
    }
    shown.classList.toggle('shown')
    shown.classList.toggle('rotate')
    if ( p_skills.classList.contains('rotate')) p_skills.classList.remove('rotate')
    p_skills.classList.toggle('shown')
    })
    btn_abouts.addEventListener('click', function () {
        let shown = document.querySelector('.shown')
        let halfshown = document.querySelector('.rotatehalf')
        if (halfshown) {
            halfshown.classList.remove('rotatehalf')
        }
        shown.classList.toggle('shown')
        shown.classList.toggle('rotate')
        if ( p_about.classList.contains('rotate')) p_about.classList.remove('rotate')
        p_about.classList.toggle('shown')
     })


     function getJoke(){
        const p = axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" }
    }).then((response) => {
    
            const joke = response.data
    
            const jokeContainer = document.querySelector('.joke');
    
             jokeContainer.removeChild(jokeContainer.childNodes[2]);
    
            const blockquoteEl = document.createElement('blockquote');
    
            blockquoteEl.append(joke);
    
            jokeContainer.appendChild(blockquoteEl);
        }).catch((error) => {
            console.log(error)
            const jokeContainer = document.querySelector('.joke');
            jokeContainer.innerText = 'Joke not found :(';
        });
    }
