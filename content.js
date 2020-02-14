window.addEventListener('load', () => {
  checkSquash = setInterval(() => {
    const checkbox = document.querySelector("input[name='squash']")
    if (checkbox) {
      checkbox.checked = true;
      clearInterval(checkSquash);
    }
  }, 250);
});
