!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=0;function o(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){a=setInterval(o,1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.5f958ba4.js.map