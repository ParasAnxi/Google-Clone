const sanitizeTextInput = (rawTextInput) => rawTextInput.trim();

const resetValues = (inputText, clearSvg) => {
  inputText.value = '';
  clearSvg && clearSvg.classList.remove('active');
};

function getMaxChars() {
  const width = window.innerHeight;
  let maxChars = 65;

  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width >= 1400) maxChars = 130;

  return maxChars;
}

function toggleLoadingSpinner(action) {
  const spinner = document.querySelector('.lds-dual-ring');
  spinner.style.display = action === 'on' ? 'inline-block' : 'none';
}

export { sanitizeTextInput, resetValues, getMaxChars, toggleLoadingSpinner };
