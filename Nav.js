const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    if (window.scrollY>=50){
        nav.classList.add('active_nav');
    }else{
        nav.classList.remove('active_nav');
    }

});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});
const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show2')
        } else {
            entry.target.classList.remove('show2')
        }
    });
});
const hiddenElements = document.querySelectorAll('.content');
hiddenElements.forEach((el)=> observer.observe(el));
const hiddenH = document.querySelectorAll('.content2');
hiddenH.forEach((el)=> observer1.observe(el));

