// Utility functions for Gardening App

export function calculateWaterNeeds(plantType, temperature) {
	// TODO: Make this function dynamic based on plantType
	return temperature > 25 ? "Water daily" : "Water every 2 days";
}
