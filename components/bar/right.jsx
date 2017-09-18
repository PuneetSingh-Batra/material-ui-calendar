import React from 'react'
import PropTypes from 'prop-types'
import ViewDay from 'material-ui-icons/ViewList'
import ViewWeek from 'material-ui-icons/ViewWeek'
import ViewMonth from 'material-ui-icons/ViewModule'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'

import { capitalize } from '../libs/'
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

const CalendarBarRight = props => {
	const { classes, currentView } = props

	const onChangeView = (event, view) => props.onChangeView(view)

	return <BottomNavigation
		value={currentView}
		onChange={onChangeView}
		className={classes.root}
	>
		{ViewsTypes.map((item, idx) => <BottomNavigationButton key={idx} label={capitalize(item)} value={item} icon={components[item]} />)}
	</BottomNavigation>
};


CalendarBarRight.propTypes = {
	classes: PropTypes.object.isRequired,
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
	onChangeView: PropTypes.func.isRequired
};

export default CalendarBarRight
