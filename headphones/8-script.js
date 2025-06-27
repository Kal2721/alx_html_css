const hamburger = document.querySelector('.hamburger');
const lists = document.querySelector('.lists');

hamburger.addEventListener("click", () => {
	 lists.classList.toggle('active');
});
