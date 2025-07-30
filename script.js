function toggleMenu(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function showContent(title, content) {
  const contentArea = document.getElementById("contentArea");
  contentArea.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
}
