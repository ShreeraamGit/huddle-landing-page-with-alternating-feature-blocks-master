const tl = gsap.timeline({ defaults: { duration: 0.4 } });
gsap.from(".about-svg", { duration: 1, x: 10, opacity: 0, scale: 0.5 });
gsap.to("#messages-1,#messages-2", { duration: 3, x: 10, repeat: -1 });

tl.fromTo(".about-content", 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });