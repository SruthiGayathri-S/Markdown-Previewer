const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview-output");

function updatePreview() {
  const markdownText = textarea.value;
  preview.innerHTML = marked.parse(markdownText);
}

// Initial load
updatePreview();

// Update on input
textarea.addEventListener("input", updatePreview);
