import React, { Component } from 'react'
//import events from 'events';
import * as BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import 'moment/locale/nb';
import 'moment/locale/es.js';

//const localizer = BigCalendar.momentLocalizer(moment);

BigCalendar.momentLocalizer(moment)

export class calendar extends Component {
    render() {
        return (

            <div style={{ height: 700 }}>
                <button onClick={() => this.setState({ view: "day" })}>Day</button>
                <button onClick={() => this.setState({ view: "month" })}>Month</button>
                <BigCalendar
                    events=
                    {
                        {
                            'title': 'All Day Event very long title',
                            'allDay': true,
                            'start': new Date(2015, 3, 0),
                            'end': new Date(2015, 3, 1)
                        }
                    }
                    views={['month', 'week']}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default calendar