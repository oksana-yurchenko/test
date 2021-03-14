let burger = document.querySelector("#burger-icon"),
closeBtn = document.querySelector("#burger-icon-close"),
header = document.querySelector("#header");

burger.onclick = function() {
	header.classList.add("menu-open");
}
closeBtn.onclick = function() {
	header.classList.remove("menu-open");
}
