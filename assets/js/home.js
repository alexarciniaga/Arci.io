    document.addEventListener("DOMContentLoaded",() => {

        const leftClick = document.querySelector('#leftClick')
        const rightClick = document.querySelector('#rightClick')
        const decisionscontainer = document.querySelectorAll('#decisions');
        function pageTransition() {
            var tl = gsap.timeline();
            var h1class = document.querySelector('.transition h1')

            tl.to('.transition', {duration: .8, width: "100%", stagger: .2, display: "flex",ease:"power3.out", },"start") 
            tl.to('.transition h1', {duration: .5, opacity:1, translateX:"0px",delay:.75}, "start")
            tl.to('.transition h1', {duration: .5, opacity:0, translateX:"80px"})
            tl.to('.transition h1', {duration: .1, opacity:0, translateX:"-80px",delay: .25})
            tl.to('.transition', {duration: .75, width:0, stagger: .1, delay: .5,ease:"power3.out"}, "end")
        }
        
        function delay(n) {
            n = n || 2000;
            return new Promise(done => {
              setTimeout(() => {
                done();
              }, n);
            });
          }
          function contentAnimation() {
            var tl = gsap.timeline();
            tl.from('.container1', {duration:1.25, opacity:0})
            tl.to('.container1', {clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
          }
        leftClick.addEventListener('click', (event) => {
            barba.init({
              transitions: [{
                name: 'landing-transition',
                sync: true,
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1500);
                    done();
                },
                async enter(data) {
                    contentAnimation();
                },
                async once(data) {
                    contentAnimation();
                }
              }]
            });

        })
        rightClick.addEventListener('click', (event) => {
                event.preventDefault();
                for (const decision of decisionscontainer) {
                    decision.classList.add('decisionTwo');
                    decision.children[1].children[0].classList.add('textFade');
                }
            })

        function light() {
            var anim = document.getElementById("bolt");
            lottie.loadAnimation({
            container: anim, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/js/json/lightningbolt.json' // the path to the animation json
          });
    }
    light();
          
    })
    document.addEventListener('mouseover', (event) => {
        const decisions1 = document.querySelectorAll('#decisions .container1');
        const decisions2 = document.querySelectorAll('#decisions .container2');
        for (const decision2 of decisions2) {
            for (const decision1 of decisions1) {
                decision1.style.borderRight = "none"
                decision2.style.borderLeft = "none"
            }
        }
    })
    document.addEventListener('mouseleave', () => {
        const decisions1 = document.querySelectorAll('#decisions .container1');
        const decisions2 = document.querySelectorAll('#decisions .container2');
        for (const decision2 of decisions2) {
            for (const decision1 of decisions1) {
                decision1.style.borderRight = "1px solid #fff"
                decision2.style.borderLeft = "1px solid #fff"
            }
        }
    })
