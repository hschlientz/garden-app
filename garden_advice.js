function greetUser(name) {
	if (typeof name !== "string" || name.trim() === "") {
		return "Hello, gardener! Welcome back to your garden.";
	}
	return `Hello, ${name}! Welcome back to your garden.`;
}

function showGardenTips() {
	console.log("Tip: Water early in the morning to reduce evaporation.");
}

console.log(greetUser("Alex"));
showGardenTips();
