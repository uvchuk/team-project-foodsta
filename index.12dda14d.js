(()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),bodyLock:document.querySelector("[data-body-lock]")};function e(){o.modal.classList.toggle("is-hidden"),o.bodyLock.classList.toggle("locked")}o.openModalBtn.forEach((o=>o.addEventListener("click",e))),o.closeModalBtn.addEventListener("click",e)})();
//# sourceMappingURL=index.12dda14d.js.map
