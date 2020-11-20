const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if(payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  };
}
// alternativley the button could fade again eg disabled true vs unobserve, could even slide in and out of view via transform, though current setup meets a t&c use case.

// There is also a ResizeObserver for obseervin when an elemtnt has been resized
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1, //  when last element is fully on page, paragraph was too big so a hr was added
} );

ob.observe(terms.lastElementChild);

/* Old way using scroll height etc */
// terms.addEventListener('scroll', function(event ) {
//   console.log(event);
// });