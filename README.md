Click here for the Markdown Preview site: https://690a0ba60d37c52e50ee45c1--willowy-fox-13a04e.netlify.app/



Markdown Previewer

A simple and lightweight web application with two panes:  
- The left pane lets users type Markdown text.  
- The right pane shows the HTML output in real-time using a Markdown parser.

 Features

- Live Markdown to HTML preview
- Two-pane responsive layout
- Supports GitHub-flavored Markdown
- Built with pure HTML, CSS, and JavaScript
- Uses [Marked.js](https://github.com/markedjs/marked) for Markdown parsing

 Tech Stack

- HTML5 – Markup structure  
- CSS3 – Styling and responsiveness  
- JavaScript (ES6) – DOM and real-time rendering  
- Marked.js – Lightweight Markdown parsing

 Project Structure

markdown-previewer/

├── index.html # Main web page
├── style.css # Styling rules
├── script.js # JavaScript functionality
└── README.md # Project documentation

How It Works

1. The user types Markdown into a `<textarea>` on the left.
   MARKDOWN -> Markdown is a lightweight markup language that uses plain-text formatting to style documents.
It’s widely used on platforms like GitHub, Reddit, and Stack Overflow to write content efficiently.

3. JavaScript captures the input and converts it using `marked()`.
4. The converted HTML is injected into the preview pane on the right, updating live.

How to Run Locally

1. Clone or download this project:
git clone https://github.com/your-username/markdown-previewer.git
cd markdown-previewer

2. Open the index.html file in your browser:
Copy code
start index.html    -> Windows
open index.html     -> macOS
