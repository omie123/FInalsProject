document.querySelector('#myFile').addEventListener("change", function () {
	const reader = new FileReader();

	reader.addEventListener("load", () => {
		localStorage.setItem("profile-picture", reader.result);
	});
	reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
	const recentImageDataUrl = localStorage.getItem("profile-picture");

	if(recentImageDataUrl) {
		document.querySelector("#imgProfile").setAttribute("src",recentImageDataUrl);
	}
});