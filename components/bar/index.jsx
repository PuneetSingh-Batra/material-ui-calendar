import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import CalendarBarRight from './right'
import CalendarBarCation from './caption'

const CalendarBar = props => {
	const { leftBarContent, rightBarContent, captionBarContent } = props
	return <Grid container spacing={8}>
		<Grid item xs>
			{leftBarContent}
		</Grid>
		<Grid item xs={6}>
			{rightBarContent || <CalendarBarCation {...props} />}
		</Grid>
		<Grid item xs>
			{captionBarContent || <CalendarBarRight {...props} />}
		</Grid>
	</Grid >
}

CalendarBar.propTypes = {
	leftBarContent: PropTypes.element,
	rightBarContent: PropTypes.element,
	captionBarContent: PropTypes.element,
}

export default CalendarBar
