export function capitalize(str) {
	return str.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}
