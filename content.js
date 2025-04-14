const inputs = document.querySelectorAll("input, textarea, select");

inputs.forEach((input, index) => {
  const key = `${location.href}::${input.name || index}`;

  // Restaurar
  chrome.storage.local.get([key], (result) => {
    if (result[key]) input.value = result[key];
  });

  // Guardar al escribir
  input.addEventListener("input", () => {
    chrome.storage.local.set({ [key]: input.value });
  });
});
