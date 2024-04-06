import { useState } from 'react';

const ToggleButton = () => {
    const[toggleView, setToggleView] = useState();

    return(
        <div className="trigger-button" onClick={() =>  setToggleView(!toggleView)}>
            <button>Card View</button>
        </div>
    );
    
}

export default ToggleButton;