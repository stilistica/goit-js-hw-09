const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let o=0;function a(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){o=setInterval(a,1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1c131f29.js.map