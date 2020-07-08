    document.addEventListener("DOMContentLoaded",() => {
      loadWork();
      function loadWork() {
        let anchors = document.querySelectorAll('.hover');
        anchors.forEach((anchor) => {
            if (window.innerWidth < 992) {
            anchor.classList.add('hovered');
            anchor.removeEventListener('mouseenter',loadWork,true);
            anchor.removeEventListener('mouseleave',loadWork,true)
            }
            else {
              anchor.classList.remove('hovered');
              anchor.addEventListener('mouseenter', ()=> { 
                  anchor.classList.add('hovered');
              })
              anchor.addEventListener('mouseleave', ()=> {
                  anchor.classList.remove('hovered');
              })

            }
        });
      }
      window.addEventListener('resize', ()=> {
        loadWork();
      })
        function pageTransition() {
            var tl = gsap.timeline();
            var h1class = document.querySelector('.transition h1')

            tl.to('.transition', {duration: .8, width: "100%", stagger: .2, display: "flex",ease:"power3.out", },"start") 
            tl.to('.transition h1', {duration: .5, opacity:1, translateX:"0px",delay:.75}, "start")
            tl.to('.transition h1', {duration: .5, opacity:0, translateX:"80px"})
            tl.to('.transition h1', {duration: .1, opacity:0, translateX:"-80px",delay: .25})
            tl.to('.transition', {duration: .4, width:0, stagger: .1, delay: .5,ease:"power3.out"}, "end")
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
            tl.from('main', {duration:1.25, opacity:0})
            tl.to('main', {opacity:1})
          }
            barba.init({
              transitions: [{
                name: 'landing-transition',
                sync: true,
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1100);
                    done();
                },
                async enter(data) {
                    contentAnimation();
                    loadWork();
                },
                async once(data) {
                    contentAnimation();
                }
              }]
            });

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
