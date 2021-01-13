var tl = gsap.timeline({
  defaults: { duration: 0.5, ease: 'none', opacity: 0 }
});

var tl2 = gsap.timeline({ defaults: { duration: 1, delay: 3 } });

tl.from('.svg', { y: 40 })
  .from('#screen', { y: 100 }, '+=0.2')
  .from('#line-1', { y: 100 }, '-=0.2')
  .from('#line-2', { y: 80 }, '-=0.1')
  .from('#line-3', { y: 60 }, '-=0.1')
  .from('#line-4', { y: 40 }, '-=0.1')
  .from('#btn', { y: 100 }, '-=0.2');

tl2.to('.svg', {
  x: 'random(-50, 50, 5)',
  y: 'random(-50, 50, 5)',
  repeat: -1,
  yoyo: true,
  repeatRefresh: true
});
