// Inyectar el content script en la pestaña activa
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

// Botón para borrar datos guardados
document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.clear(() => {
    alert("Datos eliminados correctamente.");
  });
});
