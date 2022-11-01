document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),o=document.getElementById(t),n=document.querySelector(".page-header").offsetHeight,r=o.getBoundingClientRect().top-n;window.scrollBy({top:r,behavior:"smooth"})}))}));
//# sourceMappingURL=index.8a741771.js.map
