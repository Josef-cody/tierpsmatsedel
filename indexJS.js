const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLink.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    
    
}
navSlide();

const wrapper = document.getElementById("scroll-animation-wrapper");
const className = "in-view";
wrapper.classList.remove(className);
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
wrapper.classList.add(className);
return;
}
wrapper.classList.remove(className);
});
},
{
threshold: 1
}
);
observer.observe(wrapper);