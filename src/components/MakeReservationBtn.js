import React, { useContext } from 'react';
import { Button } from "react-bulma-components";
import {storeReservationInStorage } from '../firebase';
import { ReservationsContext } from '../providers/ReservationsProvider';

function getReservationDates() {
    return [getStartDate(), getEndDate()];
}

function getStartDate() {
    return new Date(); 
}

function getEndDate() {
    const endTime = getStartDate();
    endTime.setHours(endTime.getHours() + 1);
    return endTime;
}

export default function MakeReservation() {

    const {isReserved} = useContext(ReservationsContext);

    const storeReservation = function() {
        if(isReserved) {
            return;
        }
        storeReservationInStorage(...getReservationDates());

    }
    return (<Button disabled={isReserved} color="primary" onClick={storeReservation}> Reserve now </Button>)
}