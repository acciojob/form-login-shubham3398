function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById("first-name");
	const lastName = document.getElementById("last-name");

	let ans = firstName.value + " " + lastName.value;
	alert(ans);
}
