import React from 'react';
import moment from 'moment';

const Reservation = (props) => {
    const {startTime, endTime, user} = props.data;

    return (<tr>
            <td>{moment(startTime.toDate()).calendar()}</td>
            <td>{moment(endTime.toDate()).calendar()}</td>
            <td>{user}</td>
        </tr>);
} 

export default Reservation;