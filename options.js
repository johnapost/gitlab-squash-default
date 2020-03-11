const squashInput = document.querySelector("#squashCommits");
const sourceInput = document.querySelector("#deleteSource");

const loadOptions = () => {
  chrome.storage.sync.get({
    squashOption: "enabled",
    sourceOption: "enabled"
  }, (items) => {
    squashInput.value = items.squashOption;
    sourceInput.value = items.sourceOption;
  })
}

const saveOptions = () => {
  const squashOption = squashInput.value;
  const sourceOption = sourceInput.value;

  chrome.storage.sync.set({ squashOption, sourceOption });
}

document.addEventListener("DOMContentLoaded", loadOptions);
squashInput.addEventListener("change", saveOptions);
sourceInput.addEventListener("change", saveOptions);
