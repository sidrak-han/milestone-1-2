const ToggleButton  = document.getElementById('toggle-Skills') as HTMLButtonElement
const skills = document.getElementById('Skills') as HTMLElement

ToggleButton.addEventListener('click', ()=> {
     if( skills.style.display === 'none') {
         skills.style.display = 'block'
     }else {
        skills.style.display = 'none'
     }
});
