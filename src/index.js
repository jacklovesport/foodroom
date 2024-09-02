import "./styles.css";

import { aboutContent } from './aboutContent.js';
import { contactContent } from './contactContent.js';
import { menuContent } from './menuContent.js';

const content = document.getElementById('content');

content.appendChild(aboutContent());
content.appendChild(menuContent());
content.appendChild(contactContent());

const aboutButton = document.getElementById('about');
const contactButton = document.getElementById('contact');
const menuButton = document.getElementById('menu');
const homeButton = document.getElementById('home')

aboutButton.addEventListener('click', function() {
   content.innerHTML = '';
    content.appendChild(aboutContent())
});

contactButton.addEventListener('click', function() {
    content.innerHTML = '';
    content.appendChild(contactContent())
});

menuButton.addEventListener('click', function() {
    content.innerHTML = '';
    content.appendChild(menuContent());
})

homeButton.addEventListener('click', function(){
 content.innerHTML = '';
    content.appendChild(aboutContent());
    content.appendChild(menuContent());
    content.appendChild(contactContent());
})

document.addEventListener('DOMContentLoaded', () => { loadContent();})

console.log("we will one day get there.")