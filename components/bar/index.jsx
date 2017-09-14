import React from 'react'
import Grid from 'material-ui/Grid'
import CalendarView from './view'
import CalendarCation from './caption'

// TODO need change view and alligment component by center
const CalendarBar = props => (
	<Grid container spacing={8}>
		<Grid item xs>
			<div> Left </div>
		</Grid>
		<Grid item xs={6}>
			<CalendarCation {...props} />
		</Grid>
		<Grid item xs>
			<CalendarView {...props} />
		</Grid>
	</Grid >
)

export default CalendarBar
