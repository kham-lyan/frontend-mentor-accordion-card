const accordionBtn = document.querySelectorAll('.accordion-question');
const accordionBody = document.querySelectorAll('.accordion-content')

accordionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        accordionBody.forEach(accContent => {
            if (e.target.nextElementSibling !== accContent && accContent.classList.contains('active')) {
                accContent.classList.remove('active');
                accordionBtn.forEach(btn => btn.classList.remove('active'));
            }
        })
        
        const panel = btn.nextElementSibling;
        panel.classList.toggle('active');
        btn.classList.toggle('active');
        
    })
})