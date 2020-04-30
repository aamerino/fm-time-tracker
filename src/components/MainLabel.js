import React, { useContext } from 'react';
import { ReservationsContext } from '../providers/ReservationsProvider';
import { curry } from 'ramda';

function render(sectionStyle, isReserved) {
  return <section style={ sectionStyle } className={ isReserved ? "hero is-danger" : "hero is-primary"}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {isReserved ? "Busy" : "Free"}
        </h1>
      </div>
    </div>
  </section>;
}

function getStyles() {
  return {
    'marginBottom': '20px'
  }
}

const renderWithStyles = curry(render)(getStyles());


export default function MainLabel() {
  const { isReserved } = useContext(ReservationsContext);
  return renderWithStyles(isReserved);
}