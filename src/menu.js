(() => {
	const mobileMenu = document.querySelector("[data-menu]");
	const menuOpen = document.querySelector("[data-menu-open]");
	const menuClose = document.querySelector("[data-menu-close]");
	const bodyLock = document.querySelector("[data-body-lock]");

	const toggleMenu = () => {
		const isMenuOpen = menuOpen.getAttribute("aria-expanded") === "true" || false;
		menuOpen.setAttribute("aria-expanded", !isMenuOpen);
		mobileMenu.classList.toggle("is-open");
		menuOpen.classList.toggle("is-open");
		bodyLock.classList.toggle("locked");
	};

	menuOpen.addEventListener("click", toggleMenu);
	menuClose.addEventListener("click", toggleMenu);

	window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
		if (!e.matches) return;
		mobileMenu.classList.remove("is-open");
		menuOpen.classList.remove("is-open");
		bodyLock.classList.remove("locked");
		menuOpen.setAttribute("aria-expanded", false);
	});
})();
