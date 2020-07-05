document.addEventListener('DOMContentLoaded', ()=> {
    let anchors = document.querySelectorAll('.hover');
    anchors.forEach((anchor) => {
        anchor.addEventListener('mouseover', ()=> { 
            anchor.classList.add('hovered');
        })
        anchor.addEventListener('mouseleave', ()=> {
            anchor.classList.remove('hovered');
        })
    })
});