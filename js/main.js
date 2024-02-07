//FAQ
document.addEventListener('DOMContentLoaded', ()=>{
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e)=>{ //instead of add event listener for every children, we add event for the parent container
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle answer
        groupBody.classList.toggle('open');

        //close other open bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach(element => {
            if (element !== group) {
                const otherGroupBody = element.querySelector('.faq-group-body');
                const otherIcon = element.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
})

//mobile menu
document.addEventListener('DOMContentLoaded', ()=>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', ()=>
        mobileMenu.classList.toggle('active')
    );
})