import React from 'react'

import CalendarMaterial from '../';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentView: 'day'
		}

		this.changeView = this.changeView.bind(this)
		this.onChangeDate = this.onChangeDate.bind(this)
	}

	changeView(current) {
		this.setState({ currentView: current });
	}

	onChangeDate(newDate) {
		this.setState({ currentDate: newDate })
	}

	render() {
		return <div>
			<CalendarMaterial
				{...this.state}
				onChangeDate={this.onChangeDate}
				onChangeView={this.changeView}
			/>
		</div>
	}

}
