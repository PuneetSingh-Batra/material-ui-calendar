import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import moment from 'moment'

import { ViewsTypes } from '../constants/'

const CalendarHeader = props => {

	const { currentView, currentDate, formatHeaderDay, useIsoWeek } = props

	const colomns = () => {
		const date = moment(currentDate);
		switch (currentView) {
			case 'day':
				return ['', date.format(formatHeaderDay)];
			case 'week':
				const startDate = date.clone().startOf(useIsoWeek ? 'isoWeek' : 'week')
				return Array(7).fill('').map((e, i) => startDate.clone().add(i, 'day').format(formatHeaderDay))
			case 'month':
				return moment.weekdays();
		}
		return [];
	}

	return <Grid
		container
		align="center"
		direction="row"
		justify="space-around">
		{colomns().map((item, idx) => <Grid item key={idx}>{item}</Grid>)}
	</Grid>
}

CalendarHeader.propTypes = {
	useIsoWeek: PropTypes.bool,
	currentDate: PropTypes.number.isRequired,
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
	formatHeaderDay: PropTypes.string.isRequired,
}

export default CalendarHeader
