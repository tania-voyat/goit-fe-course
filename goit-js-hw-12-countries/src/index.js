const debounce = require('lodash.debounce');
import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';

const refs = {
  input: document.querySelector('.input'),
};

refs.input.addEventListener('input', debounce(fetchCountries, 500));

// function fetchCountries(event) {
//   const inputValue = event.target.value;
//   fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
//     .then(result => result.json())
//     .then(countries => {
//       if (countries.length === 1) {
//         onSingleFetch(countries);
//       } else if (countries.length > 1 && countries.length < 10) {
//         onMultiplyFetch(countries);
//       } else {
//         error('Too many matches found. Please enter a more specific query!');
//       }
//     });
// }

// function onSingleFetch(arr) {
//   const markupOne = countryTpl(arr);
//   refs.list.insertAdjacentHTML('beforeend', markupOne);
// }

// function onMultiplyFetch(arr) {
//   const markupMany = countriesTpl(arr);
//   refs.list.insertAdjacentHTML('beforeend', markupMany);
// }
