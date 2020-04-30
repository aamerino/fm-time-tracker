import React, { useContext } from 'react';
import { ReservationsContext } from '../providers/ReservationsProvider';
import Reservation from './Reservation';

const ReservationsList = () => {
    const {reservations} = useContext(ReservationsContext);

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Start Date:</td>
                    <td>End Date:</td>
                    <td>User:</td>
                </tr>
            </thead>
            <tbody>
                {reservations.map(reservation => <Reservation {...reservation} key={reservation.id} />) }
            </tbody>
        </table>
    )
}

export default ReservationsList;