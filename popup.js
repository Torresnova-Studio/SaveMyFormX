document.getElementById("clear").addEventListener("click", () => {
    chrome.storage.local.clear(() => {
      alert("Datos eliminados correctamente.");
    });
  });
  