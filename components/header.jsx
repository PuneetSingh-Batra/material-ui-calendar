import React from 'react'
import Grid from 'material-ui/Grid'

export default class CalendarHeader extends React.Component {

	render() {
		return <Grid
			container
			align="center"
			direction="row"
			justify="space-between">
			<Grid item>
				<div> Left </div>
			</Grid>
			<Grid item>
				<div> Center </div>
			</Grid>
			<Grid item>
				<div> Right </div>
			</Grid>
		</Grid>
	}
}
