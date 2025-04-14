// Botón para borrar datos guardados
document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.clear(() => {
    alert("Datos eliminados correctamente.");
  });
});
