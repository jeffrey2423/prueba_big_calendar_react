import React, { Component } from 'react'
import events from '../events'
import * as BigCalendar from 'react-big-calendar-like-google';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'


//import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export class FCalendar extends Component {
    render() {
        return (
            <div>

                <BigCalendar
                    selectable
                    events={events}
                    defaultView='week'
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 17)}
                    onSelectEvent={event => alert(event.desc)}
                    // onSelectSlot={(slotInfo) => alert(
                    //     `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    //     `\nend: ${slotInfo.end.toLocaleString()}` +
                    //     `\naction: ${slotInfo.action}`
                    // )}
                />
            </div>
        )
    }
}

export default FCalendar
