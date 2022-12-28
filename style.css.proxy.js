// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\nbody.paper {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      transparent 3rem,\r\n      rgba(72, 209, 204, 0.2) 3rem,\r\n      rgba(72, 209, 204, 0.2) 3.1rem,\r\n      transparent 3.1rem\r\n    ),\r\n    linear-gradient(rgba(0, 0, 0, 0.05) 0.08rem, transparent 0.08rem);\r\n  background-size: 100% 1rem;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  margin: 0 5rem;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  min-width: 80px;\r\n}\r\n\r\n.todo-input {\r\n  margin: 0 auto;\r\n  background-color: #e8e8e8;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: flex-start;\r\n  gap: 1rem;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  z-index: 99;\r\n}\r\n\r\n/* Todo list items */\r\nul li {\r\n  list-style-type: none;\r\n  background-color: khaki;\r\n  margin-top: 0.75rem;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Done todo */\r\nul li.done {\r\n  background-color: lightgreen;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: slategray;\r\n}\r\n\r\nul li label {\r\n  padding: 0.25rem 0.5rem;\r\n  z-index: 2;\r\n}\r\n\r\nul li span {\r\n  padding: 0.25rem 0.5rem;\r\n  opacity: 0;\r\n}\r\n\r\nul li:hover span {\r\n  background-color: rgb(198, 190, 119);\r\n  opacity: 0.8;\r\n}\r\n\r\nul li.done:hover span {\r\n  background-color: rgb(121, 198, 121);\r\n  opacity: 0.8;\r\n}\r\n\r\nul li span i.fa {\r\n  color: darkred;\r\n}\r\n\r\ndiv.drawings {\r\n  position: relative;\r\n}\r\n\r\n.drawings canvas {\r\n  position: absolute;\r\n}\r\n\r\ncanvas.smiley {\r\n  top: 15rem;\r\n  left: 5rem;\r\n}\r\n\r\ncanvas.text {\r\n  top: 28rem;\r\n  left: 55rem;\r\n}\r\n\r\ncanvas.bubble {\r\n  top: 12rem;\r\n  left: 35rem;\r\n}\r\n\r\ncanvas.stickman {\r\n  top: 16rem;\r\n  left: 20rem;\r\n}\r\n\r\ncanvas.heart {\r\n  top: 9rem;\r\n  left: 55rem;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}