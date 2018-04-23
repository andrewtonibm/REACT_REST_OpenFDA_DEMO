import React from 'react';

const DrugFound = props => (
  <div className="andrewOpenFDADemoInREACTinfo">

    { 
      props.stateDrug1 && 
        <div className="andrewOpenFDADemoInREACTkey"> 
        <span className="andrewOpenFDADemoInREACTinfo"> { props.stateDrug1 } </span>
      </div>
    }

  </div>
);

export default DrugFound;