import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const radioButtons = form.querySelectorAll('input[name="state"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const delay = Number(delayInput.value); 
  const state = document.querySelector('input[name="state"]:checked').value; 


  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((resolvedDelay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
      });
    })
    .catch((rejectedDelay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
      });
    });
});