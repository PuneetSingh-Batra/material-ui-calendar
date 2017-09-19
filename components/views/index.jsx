import React from 'react'
import PropTypes from 'prop-types'

import CalendarViewDay from './day'
import CalendarViewWeek from './week'
import CalendarViewMonth from './month'

import { ViewsTypes } from '../constants/'

const CalendarView = props => {
	const { currentView } = props
	switch (currentView) {
		case 'day':
			return <CalendarViewDay {...props} />
		case 'week':
			return <CalendarViewWeek {...props} />
		case 'month':
			return <CalendarViewMonth {...props} />
	}
}

CalendarView.propTypes = {
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
}

export default CalendarView
