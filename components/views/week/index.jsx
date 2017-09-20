import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridListTile } from 'material-ui/GridList'
import ButtonBase from 'material-ui/ButtonBase'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import moment from 'moment'

import { gridHours } from '../../libs/'

const getWeek = (useIsoWeek, currentDate, time) => {
	const startDay = moment(currentDate).startOf(useIsoWeek ? 'isoWeek' : 'week')
	const elements = [];
	console.log(+moment(time))
	for (let i = 0; i < 7; i++) {
		elements.push(<GridListTile
			key={`item_${i}`}
			cols={3}
			data-time={time}
			id={`cell_${+startDay.clone().add(i, 'day').add(time)}`}
			data-date={+startDay.clone().add(i, 'day')} />)
	}
	return elements;
}

const CalendarViewWeek = props => {
	const { classes, usageAMPM, useIsoWeek, currentDate } = props
	return <div>
		{gridHours(usageAMPM ? 'hh:mm A' : 'HH:mm')
			.map((e, i) => <ButtonBase className={classes.gridLine} key={i} component={'div'}>
				<GridList cols={22} cellHeight={41} className={classes.gridRow}>
					<GridListTile cols={1}>
						<Typography>
							{e.title}
						</Typography>
					</GridListTile>
					{getWeek(useIsoWeek, currentDate, e.value)}
				</GridList>
				<Divider />
			</ButtonBase>
			)}
	</div>
}

CalendarViewWeek.propTypes = {
	classes: PropTypes.object.isRequired,
	currentDate: PropTypes.number.isRequired,
	useIsoWeek: PropTypes.bool,
	usageAMPM: PropTypes.bool.isRequired,
	onClickEvent: PropTypes.func,
}

export default CalendarViewWeek
