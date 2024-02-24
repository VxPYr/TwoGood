const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline();

tl.from('.page1-content h1',{
    y:50,
    opacity: 0,
    delay: 1,
    duration:0.7,
    stagger: 0.5
})

tl.from('.page1-book',{
    y:50,
    opacity: 0,
    delay: 0.3,
    duration:1,
    stagger: 0.5
}) 