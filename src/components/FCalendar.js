import React, { Component } from 'react'
import events from '../events'
import * as BigCalendar from 'react-big-calendar-like-google';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


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
                    popup
                    events={events}
                    defaultView='week'
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 17)}
                    onSelectEvent={event =>

                          Swal.fire({
                            title: event.title,
                            text: event.desc,
                            showConfirmButton: false,
                            showCloseButton: true,
                            width: 600,
                            padding: '3em',
                            background: '#fff url(/images/trees.png)',
                            backdrop: `
                            rgba(121, 129, 134, 0.2)
                              url("/images/nyan-cat.gif")
                              left top
                              no-repeat
                            `
                          })
                          
                        
                    }
                onSelectSlot={(slotInfo) => alert(
                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                )}
                />
            </div>
        )
    }
}

export default FCalendar
