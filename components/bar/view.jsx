import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import ViewDay from 'material-ui-icons/ViewList'
import ViewWeek from 'material-ui-icons/ViewWeek'
import ViewMonth from 'material-ui-icons/ViewModule'

import { ViewsTypes } from '../constants/'

const components = ViewsTypes.reduce((res, item) => {
	// TODO need refactor
	switch (item) {
		case 'day':
			res.day = <ViewDay />
			break
		case 'week':
			res.week = <ViewWeek />
			break
		case 'month':
			res.month = <ViewMonth />
			break
	}
	return res;
}, {});

const CalendarView = props => {
	const { classes, currentView } = props

	const onChangeView = (view) => props.onChangeView(view)
	const currentColor = (period) => currentView === period ? 'accent' : 'default'

	return <Grid container>
		{ViewsTypes.map((item, idx) =>
			<Button
				key={idx}
				aria-label={item}
				className={classes.button}
				color={currentColor(item)}
				onClick={() => onChangeView(item)}>
				{components[item]}
			</Button>
		)}
	</Grid>
};


CalendarView.propTypes = {
	classes: PropTypes.object.isRequired,
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
	onChangeView: PropTypes.func.isRequired
};

export default CalendarView
