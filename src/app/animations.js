const slideFromVars = { opacity: 0, x: -100 };
const slideToVars = { opacity: 1, x: 0 };
const imgFromVars = { opacity: 0, y: -500 };
const imgToVars = { opacity: 1, y: 0, duration: 1 };
const opacityFromVars = { opacity: 0 };
const opacityToVars = { opacity: 1 };
const opacityUpFromVars = { opacity: 0, y: 10 };
const opacityUpToVars = { opacity: 1, y: 0 };
const delayed = '-=0.8';

export function slideTextAnimation(element, tl, target, delay = delayed) {
  tl.fromTo(element.querySelector(target), slideFromVars, slideToVars, delay);
}

export function imgAnimation(element, tl, target, delay = delayed) {
  tl.fromTo(element.querySelector(target), imgFromVars, imgToVars, delay);
}

export function opacityAnimation(element, tl, target, delay = delayed) {
  tl.fromTo(
    element.querySelector(target),
    opacityFromVars,
    opacityToVars,
    delay
  );
}

export function opacityUpAnimation(element, tl, target, delay = delayed) {
  tl.fromTo(
    element.querySelector(target),
    opacityUpFromVars,
    opacityUpToVars,
    delay
  );
}
