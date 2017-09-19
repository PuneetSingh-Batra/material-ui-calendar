import React from 'react'
import PropTypes from 'prop-types'

import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import { gridHours } from '../../libs/'

const CalendarViewDay = props => {
	const { classes, currentDate, usageAMPM } = props

	return <div className={classes.root}>
		<List>
			{gridHours(usageAMPM ? 'hh:mm A' : 'HH:mm')
				.map((e, i) => <div key={i}>
					<ListItem button>
						<ListItemText primary={e} />
						<div></div>
					</ListItem>
					<Divider inset />
				</div>)}
		</List>
	</div>
}

CalendarViewDay.propTypes = {
	classes: PropTypes.object.isRequired,
	currentDate: PropTypes.number.isRequired,
	usageAMPM: PropTypes.bool.isRequired,
}

export default CalendarViewDay
