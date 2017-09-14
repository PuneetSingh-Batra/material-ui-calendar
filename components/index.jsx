import React from 'react'
import PropTypes from 'prop-types'
import CalendarBar from './bar/'
import CalendarHeader from './header'
import { withStyles } from 'material-ui/styles'

const styles = () => ({});

const CalendarMaterial = props => (
	<div>
		<CalendarBar {...props} />
		<CalendarHeader {...props} />
	</div>
)

CalendarMaterial.defaultProps = {
	currentView: 'day',
	formatDay: 'dddd, MMMM Do YYYY',
	formatWeek: 'MMM Do YYYY',
	currentDate: new Date().getTime(),
	useIsoWeek: false
}

CalendarMaterial.PropTypes = {
	classes: PropTypes.object.isRequired,
	formatDay: PropTypes.string.isRequired,
	formatWeek: PropTypes.string.isRequired,
	currentDate: PropTypes.number.isRequired,
	currentView: PropTypes.string.isRequired,
	onChangeView: PropTypes.func.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	onNext: PropTypes.func,
	onDate: PropTypes.func,
	useIsoWeek: PropTypes.bool,
	onPreviously: PropTypes.func,
}

export default withStyles(styles)(CalendarMaterial)
