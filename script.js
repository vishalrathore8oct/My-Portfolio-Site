const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            const currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // sections active class 
    allSections.addEventListener('click', function(e) {
        const id = e.target.dataset.id
        if(id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections 
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
            
        }
    })
}

pageTransitions();
