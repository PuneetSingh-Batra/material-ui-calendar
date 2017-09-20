import React from 'react'
import PropTypes from 'prop-types'

import List, { ListItem, ListItemText } from 'material-ui/List'

import { gridHours } from '../../libs/'

const onClick = (props, e) => {
	const { onClickEvent } = props
	if (onClickEvent) {
		onClickEvent(e);
	}
}

const CalendarViewDay = props => {
	const { classes, usageAMPM } = props

	return <div className={classes.root}>
		<List>
			{gridHours(usageAMPM ? 'hh:mm A' : 'HH:mm')
				.map((e, i) => <div key={i} onClick={() => onClick(props, e)} data-time={e}>
					<ListItem button divider dense>
						<ListItemText primary={e.title} />
					</ListItem>
				</div>)}
		</List>
	</div>
}


CalendarViewDay.propTypes = {
	classes: PropTypes.object.isRequired,
	currentDate: PropTypes.number.isRequired,
	usageAMPM: PropTypes.bool.isRequired,
	onClickEvent: PropTypes.func,
}

export default CalendarViewDay
