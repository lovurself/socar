gsap.registerPlugin(ScrollTrigger);

const dropBall = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball_wrap",
      start: "30% 10%",
      pin: true,
      scrub: true,
      end : "bottom top",
      toggleActions : "play reverse none reverse"
    }
});

dropBall.to('.ball', {y: 2490});