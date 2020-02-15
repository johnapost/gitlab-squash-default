const sourceInputs = [
  // Checkbox on new and edit MR screen
  "input#merge_request_force_remove_source_branch",

  // Checkbox on view MR screen
  "input#remove-source-branch-input"
]

const squashInputs = [
  // Checkbox on new and edit MR screen
  "input#merge_request_squash",

  // Checkbox on view MR screen
  "input[name='squash']"
]

// Check the boxes, end interval
const check = (inputs, interval) => {
  inputs.forEach(input => {
    const checkbox = document.querySelector(input)
    if (checkbox) {
      checkbox.checked = true;
      clearInterval(interval);
    }
  })
}

window.addEventListener('load', () => {
  const checkSquash = setInterval(() => check(squashInputs, checkSquash), 250);
  const checkSource = setInterval(() => check(sourceInputs, checkSource), 250);
});
