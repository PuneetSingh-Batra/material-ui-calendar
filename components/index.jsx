import React from 'react'
import PropTypes from 'prop-types'
import CalendarBar from './bar'
import CalendarHeader from './header'
import CalendarViews from './views'
import { withStyles } from 'material-ui/styles'

import { ViewsTypes } from './constants'

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	}
});

const CalendarMaterial = props => (
	<div>
		<CalendarBar {...props} />
		<CalendarHeader {...props} />
		<CalendarViews {...props} />
	</div>
)

CalendarMaterial.defaultProps = {
	currentView: 'day',
	formatBarDay: 'dddd, MMMM Do YYYY',
	formatBarWeek: 'MMM Do YYYY',
	formatHeaderDay: 'dddd Do',
	currentDate: new Date().getTime(),
	useIsoWeek: false,
	usageAMPM: true,
}

CalendarMaterial.propTypes = {
	classes: PropTypes.object.isRequired,
	formatBarDay: PropTypes.string.isRequired,
	formatHeaderDay: PropTypes.string.isRequired,
	formatBarWeek: PropTypes.string.isRequired,
	currentDate: PropTypes.number.isRequired,
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
	onChangeView: PropTypes.func.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	usageAMPM: PropTypes.bool,
	onNext: PropTypes.func,
	onDate: PropTypes.func,
	useIsoWeek: PropTypes.bool,
	onPreviously: PropTypes.func,
}

export default withStyles(styles)(CalendarMaterial)
