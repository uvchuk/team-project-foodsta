document.querySelectorAll('a[href^="#"').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=this.getAttribute("href").substring(1);const o=document.getElementById(t),n=document.querySelector(".page-header").offsetHeight,r=o.getBoundingClientRect().top-n;window.scrollBy({top:r,behavior:"smooth"})}))}));
//# sourceMappingURL=index.e1aec436.js.map
