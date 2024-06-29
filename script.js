gsap.registerPlugin(ScrollTrigger);

function cursorBlur() {

    document.addEventListener('DOMContentLoaded', function () {
        var crsr = document.querySelector('#cursor');
        var blur = document.querySelector('#cursor-blur');

        document.addEventListener('mousemove', function (dets) {
            var scrollX = window.scrollX;
            var scrollY = window.scrollY;

            crsr.style.left = (dets.clientX + scrollX) + "px";
            crsr.style.top = (dets.clientY + scrollY) + "px";

            blur.style.left = (dets.clientX + scrollX - 150) + "px";
            blur.style.top = (dets.clientY + scrollY - 150) + "px";
        });

        var h4all = document.querySelectorAll("#nav h4");
        h4all.forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
                crsr.style.transform = "scale(3)";
                crsr.style.border = "1px solid #fff";
                crsr.style.backgroundColor = "transparent";
            });
            elem.addEventListener("mouseleave", function () {
                crsr.style.transform = "scale(1)";
                crsr.style.border = "0px solid #95C11E";
                crsr.style.backgroundColor = "#95C11E";
            });
        });
    });


    // var crsr = document.querySelector('#cursor');
    // var blur = document.querySelector('#cursor-blur');

    // document.addEventListener('mousemove', function (dets) {
    //     var scrollX = window.scrollX;
    //     var scrollY = window.scrollY;

    //     crsr.style.left = (dets.clientX + scrollX) + "px";
    //     crsr.style.top = (dets.clientY + scrollY) + "px";

    //     blur.style.left = (dets.clientX + scrollX - 150) + "px";
    //     blur.style.top = (dets.clientY + scrollY - 150) + "px";
    // });


    // var h4all = document.querySelectorAll("#nav h4")
    // h4all.forEach(function (elem) {
    //     elem.addEventListener("mouseenter", function () {
    //         crsr.style.scale = 3;
    //         crsr.style.border = "1px solid #fff";
    //         crsr.style.backgroundColor = "transparent";
    //     })
    //     elem.addEventListener("mouseleave", function () {
    //         crsr.style.scale = 1;
    //         crsr.style.border = "0px solid #95C11E";
    //         crsr.style.backgroundColor = "#95C11E";
    //     });
    // })
}

function imageChange() {

    document.addEventListener('DOMContentLoaded', function () {
        const images = document.querySelectorAll('.slider-image');
        let currentIndex = 0;
        const changeInterval = 3000; // Change image every 2000 milliseconds (2 seconds)

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, changeInterval);
    });

}

function buttonAnimation() {
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('animatedButton');

        button.addEventListener('click', function () {
            gsap.to(button, {
                duration: 0.5,
                backgroundColor: "#95c11e",
                color: "#fff",
                ease: "power1.inOut",
                onComplete: function () {
                    gsap.to(button, {
                        duration: 0.5,
                        backgroundColor: "transparent",
                        color: "#fff",
                        delay: 0.5,
                        rotate: 360,
                        ease: "power1.inOut"
                    });
                }
            });
        });
    });

}

function gsapAnimation() {



    gsap.to('#nav', {
        backgroundColor: '#000',
        duration: 0.5,
        height: '100px',
        scrollTrigger: {
            trigger: '#nav',
            scroller: 'body',
            // markers: true,
            start: 'top -10%',
            end: "top -11%",
            scrub: 1,
        }
    })

    gsap.to('#main', {
        backgroundColor: '#000',
        scrollTrigger: {
            trigger: '#main',
            scroller: 'body',
            start: "top -25%",
            end: "top -70%",
            scrub: 2,
        }
    })

    gsap.from('#about-us img,#about-us-in', {
        y: 90,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#about-us",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 1,
        }
    })

    gsap.from('.card', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        rotateX: -20,
        rotateY: -20,
        scrollTrigger: {
            trigger: ".card",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 1,
        }
    })

    gsap.from('#colon1', {
        x: -70,
        y: -70,
        scrollTrigger: {
            trigger: '#colon1',
            scroller: 'body',
            start: "top 55%",
            end: "top 45%",
            scrub: 4,
        }
    })

    gsap.from('#colon2', {
        x: 70,
        y: 70,
        scrollTrigger: {
            trigger: '#colon1',
            scroller: 'body',
            start: "top 55%",
            end: "top 45%",
            scrub: 4,
        }
    })

    gsap.from("#page5 h1", {
        y: 50,
        scrollTrigger: {
            trigger: "#page5 h1",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
            scrub: 3,
        },
    });
}


//Function Calling
cursorBlur()
imageChange()
gsapAnimation()
buttonAnimation()