import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button';
import Back from 'material-ui-icons/ArrowBack'
import Forward from 'material-ui-icons/ArrowForward'
import moment from 'moment'

import { ViewsTypes } from '../constants/'



const CalendarBarCation = props => {

	const { classes, currentDate, formatBarDay, formatBarWeek, useIsoWeek, currentView, onNext, onChangeDate } = props

	const onNextOrPrev = next => {
		if (onNext) {
			return onNext()
		}
		onChangeDate(+moment(currentDate).add(next ? 1 : -1, currentView));
	}

	const caption = () => {
		const date = moment(currentDate)
		switch (currentView) {
			case 'day':
				return date.format(formatBarDay)
			case 'week':
				const week = useIsoWeek ? 'isoWeek' : 'week';
				return `${date.clone().startOf(week).format(formatBarWeek)} - ${date.clone().endOf(week).format(formatBarWeek)}`
			case 'month':
				return `${date.clone().startOf('month').format(formatBarWeek)} - ${date.clone().endOf('month').format(formatBarWeek)}`
		}
		return '';
	}

	return <Grid container align="center" direction="row" justify="center" >
		<Button className={classes.button} onClick={() => onNextOrPrev(false)}>
			<Back />
		</Button>
		<Button className={classes.button}>{caption(props)}</Button>
		<Button className={classes.button} onClick={() => onNextOrPrev(true)}>
			<Forward />
		</Button>
	</Grid>
}

CalendarBarCation.propTypes = {
	classes: PropTypes.object.isRequired,
	formatBarDay: PropTypes.string.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	formatBarWeek: PropTypes.string.isRequired,
	currentView: PropTypes.oneOf(ViewsTypes).isRequired,
	currentDate: PropTypes.number.isRequired,
	useIsoWeek: PropTypes.bool,
	onNext: PropTypes.func,
	onDate: PropTypes.func,
	onPreviously: PropTypes.func,
}

export default CalendarBarCation
