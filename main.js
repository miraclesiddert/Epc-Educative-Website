// change navbar style on scrool //

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// show and hide faq answer

const faqs = document.querySelectorAll('.faq'); 

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change import { connect } from 'react-redux'
        const icon = faq.querySelector{'.faq__icon i'};
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }
    })
})



// ==================== SHOW / HIDE NAV MENU

const menu =  document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const men = document.querySelector("#close-menu-btn")

// to open the menu btn
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";    
}

closeBtn.addEventListener('click', closeNav);


