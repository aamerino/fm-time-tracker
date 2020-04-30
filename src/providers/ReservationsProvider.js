import React, { Component, createContext } from 'react'
import { firestore } from '../firebase';
import { path } from 'ramda';

export const ReservationsContext = createContext();

class ReservationsProvider extends Component {
    state = {reservations : []};

    unsubscribeFromFirestore = null;

    componentDidMount = () => {
        this.unsubscribeFromFirestore = firestore.collection('reservations').orderBy("startTime","desc").onSnapshot(snapshot => {
            const reservations = snapshot.docs.map(mapper);
            this.setState({reservations});
        });
      }

    componentWillUnmount = () => {
        this.unsubscribeFromFirestore();
    }

    render() {
        const { reservations } = this.state || {};
        const isReserved = hasCurrentReservation(reservations);
        const { children } = this.props;
        return (
          <ReservationsContext.Provider value={ {reservations: reservations, isReserved} }>{children}</ReservationsContext.Provider>
        )
      }
}
export default ReservationsProvider;

function mapper(doc){
    return {
        id: doc.id,
        data: doc.data()
    }
}

function hasCurrentReservation(reservations) {
    console.log(reservations);
    return reservations.some((reservation) => {
        const currentTime = new Date();
        return path(['data', 'startTime'], reservation).toDate() < currentTime && path(['data', 'endTime'], reservation).toDate() > currentTime
    })
}