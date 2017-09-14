import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button';
import Back from 'material-ui-icons/ArrowBack'
import Forward from 'material-ui-icons/ArrowForward'
import moment from 'moment'

import { ViewsTypes } from '../constants/'

const caption = (props) => {
	const currentDate = moment(props.currentDate)
	switch (props.currentView) {
		case 'day':
			return currentDate.format(props.formatDay)
		case 'week':
			const week = props.useIsoWeek ? 'isoWeek' : 'week';
			return `${currentDate.clone().startOf(week).format(props.formatWeek)} - ${currentDate.clone().endOf(week).format(props.formatWeek)}`
		case 'month':
			return `${currentDate.clone().startOf('month').format(props.formatWeek)} - ${currentDate.clone().endOf('month').format(props.formatWeek)}`
	}
	return '';
}

const onNextOrPrev = (next, props) => {
	if (props.onNext) {
		return props.onNext()
	}
	props.onChangeDate(+moment(props.currentDate).add(next ? 1 : -1, props.currentView));
}

const CalendarCaption = props => {

	const { classes } = props

	return 			<Grid container align="center" direction="row" justify="center" >
		<Button className={classes.button} onClick={() => onNextOrPrev(false, props)}>
			<Back />
		</Button>
		<Button className={classes.button}>{caption(props)}</Button>
		<Button className={classes.button} onClick={() => onNextOrPrev(true, props)}>
			<Forward />
		</Button>
	</Grid>
}

CalendarCaption.ProtoType = {
	classes: PropTypes.object.isRequired,
	formatDay: PropTypes.string.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	formatWeek: PropTypes.string.isRequired,
	currentView: PropTypes.string.isRequired,
	currentDate: PropTypes.oneOf(ViewsTypes).isRequired,
	useIsoWeek: PropTypes.bool,
	onNext: PropTypes.func,
	onDate: PropTypes.func,
	onPreviously: PropTypes.func,
}

export default CalendarCaption
