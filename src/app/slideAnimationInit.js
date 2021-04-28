import { gsap } from 'gsap';

export default function slideAnimationInit(target) {
  let tl = gsap.timeline({
    delay: 2,
    scrollTrigger: {
      trigger: target.trigger,
      toggleActions: 'restart none restart none',
    },
    defaults: { duration: 1, ease: 'power4' },
  });

  return tl;
}
