const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview-output");
const themeToggle = document.getElementById("theme-toggle");
const docsBtn = document.getElementById("docs-btn");
const docsPopup = document.getElementById("docs-popup");
const closeDocs = document.getElementById("close-docs");
const downloadBtn = document.getElementById("download-pdf");

function updatePreview() {
  const markdownText = textarea.value;
  preview.innerHTML = marked.parse(markdownText);
}

// Initial load
updatePreview();

// Update on input
textarea.addEventListener("input", updatePreview);

// Theme toggle
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

if (docsBtn && docsPopup && closeDocs) {
  docsBtn.addEventListener("click", () => {
    docsPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  closeDocs.addEventListener("click", () => {
    docsPopup.style.display = "none";
    document.body.style.overflow = "";
  });
  docsPopup.addEventListener("click", (e) => {
    if (e.target === docsPopup) {
      docsPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const docInner = document.querySelector('.docs-inner');
    // Clone and remove the download button for PDF
    const clone = docInner.cloneNode(true);
    const btn = clone.querySelector('#download-pdf');
    if (btn) btn.remove();
    const win = window.open('', '', 'width=900,height=1000');
    win.document.write(`
      <html>
      <head>
        <title>Markdown Previewer Documentation</title>
        <style>
          body { font-family: 'Times New Roman', Times, serif; margin: 32px; }
          h2 { text-align: center; }
          h3 { margin-top: 18px; }
          ul { padding-left: 20px; }
          code { background: #f0f2f5; color: #7f5fff; border-radius: 4px; padding: 2px 6px; font-size: 0.98em; font-family: 'Fira Mono', 'Consolas', monospace; }
          .md-examples { background: #f8f8ff; border-radius: 8px; padding: 10px 12px; margin-bottom: 16px; }
        </style>
      </head>
      <body>${clone.innerHTML}</body>
      </html>
    `);
    win.document.close();
    win.print();
  });
}
