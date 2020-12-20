/*********************
 * Links
 *
 * {@link} - https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 * {@link} - https://www.heropatterns.com/
 * {@link} - https://undraw.co/illustrations
 * {@link} - https://fontawesome.com/icons?d=gallery&q=close&m=free
 * {@link} - https://www.w3schools.com/howto/howto_css_switch.asp
 * {@link} - https://www.w3schools.com/jsref/event_onchange.asp
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
 * {@link} - https://fonts.google.com/
 * {@link} - https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 **********************/

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//dark or light images 
function imageMode(color) {
    image1.src = `images/undraw_proud_coder_${color}.svg`;
    image2.src = `images/undraw_feeling_proud_${color}.svg`;
    image3.src = `images/undraw_conceptual_idea_${color}.svg`;
}



//dark mode style 
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'dark mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

//light mode style 
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'light mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light')
}


//switch theme dynamically
function switchTheme(event) {
    //console.log(event);
    //console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }

}

//event listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
//console.log(currentTheme);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}