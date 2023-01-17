import { handleSearch } from './dataFunctions.js';
import { displaySearch } from './UI.js';
import {
  sanitizeTextInput,
  resetValues,
  toggleLoadingSpinner,
} from './utils.js';

const inputText = document.querySelector('#inputText');
const searchIcon = document.querySelector('.searchIcon');
const clearSvg = document.querySelector('.clearSvg');
const searchResultsList = document.querySelector('.searchResults__list');
const beforeSearch = document.querySelector('.beforeSearch');
const afterSearch = document.querySelector('.afterSearch');
const logo = document.querySelector('.logo');

function handleChange(e) {
  if (inputText.value.trim().length) clearSvg.classList.add('active');
  if (!inputText.value.trim().length) resetValues(inputText, clearSvg);

  if (e.key == 'Enter' || e.target.innerText == 'search') {
    const currentText = sanitizeTextInput(inputText.value);

    if (currentText.length > 0) {
      beforeSearch.style.display = 'none';
      afterSearch.style.display = 'block';
      toggleLoadingSpinner('on');
      handleSearch(currentText).then((res) => {
        toggleLoadingSpinner('off');

        res.length <= 0
          ? alert('No results found')
          : displaySearch(res, searchResultsList);
      });
    }

    resetValues(inputText, clearSvg);
  }
}

inputText.addEventListener('keyup', handleChange);
searchIcon.addEventListener('click', handleChange);
clearSvg.addEventListener('click', () => resetValues(inputText, clearSvg));
logo.addEventListener('click', () => (window.location.href = '/'));
