// TODO: Add a input validation
// TODO: Make tips dynamic based on season or region
// TODO: Take pictures of plants and identify them using an API
// Suggestion: Integrate with a weather API to provide localized care tips

// Main JS logic for Gardening App
function greetUser(name) {
	// TODO: Add input validation
	return `Hello, ${name}! Welcome back to your garden.`;
}

function showGardenTips() {
	// TODO: Make tips dynamic based on season or region
	console.log("Tip: Water early in the morning to reduce evaporation.");
}

console.log(greetUser("Alex"));
showGardenTips();
