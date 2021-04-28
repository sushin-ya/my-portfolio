import { gsap } from 'gsap';

export default function PageTransition(screen, body) {
  let tl = gsap.timeline({});
  tl.to(screen, {
    duration: 1,
    left: '100%',
    ease: 'power3',
    delay: 0.3,
  }).set(screen, { left: '-100%' });

  gsap.to(body, {
    opacity: '1',
    pointerEvents: 'auto',
    delay: 2,
  });

  return () => {
    gsap.to(body, {
      opacity: '0',
      pointerEvents: 'none',
      duration: 1,
    });
  };
}
