import moment from 'moment'

/**
 * Captilize string
 * @example
 * // retusrns "Hello World"
 * capitalize("hello world")
 * @param {String} str incoming string for captilize
 * @returns {String} Captilize string
 */
export function capitalize(str) {
	return str.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}

/**
 * Build array hours
 * @example
 * // returns ['12:00 AM', ''01:00 AM', '02:00 AM',...,'10:00 PM','11:00 PM']
 * gridHours('hh:mm A')
 * @example
 * // returns ['00:00', ''01:00', '02:00',...,'22:00','23:00']
 * gridHours('HH:mm')
 * @param {String} format - Format string for result
 * @returns {Array} Arrays hours string with formating
 */
export function gridHours(format) {
	const result = [];
	const startDate = moment().startOf('day')

	for (let i = 0; i < 24; i++) {
		const date = startDate.clone().add(i, 'hour')
		result.push({ title: date.format(format), value: moment(date, format).valueOf() - startDate.valueOf() });
	}

	return result;
}
