import React, {useContext} from 'react';
import MainLabel from './MainLabel';
import {signInWithGoogle} from '../firebase';
import MakeReservation from './MakeReservationBtn'
import ResevationsProvider from '../providers/ReservationsProvider';
import ReservationsList from './ReservationsList';
import {UserContext} from '../providers/UserProvider';

function Application(){ 
    const snapshot = useContext(UserContext);
    if (snapshot) {
        return (
            <ResevationsProvider>
                <MainLabel/>
                <MakeReservation/>
                <ReservationsList/>
            </ResevationsProvider>)
    } else {
        return (<button onClick={signInWithGoogle}>Sign In With Google</button>)
    }
}

export default Application;