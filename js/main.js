function addTransparentOnNavbar() {
	const header = document.querySelector("header");
	const nav = header.firstElementChild;
	window.addEventListener("resize", function () {
		header.clientWidth <= 765 ? nav.classList.add("bg-dark") : nav.classList.remove("bg-dark");
	});
}
addTransparentOnNavbar();
