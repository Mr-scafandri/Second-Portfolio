

// show/hide skill item
const skillItems = document.querySelectorAll('section.skills .skills');

skillItems.forEach(skill => {
 skill.querySelector('.head').addEventListener('click', () => {
   skillItems.querySelector('.item')
 })
})