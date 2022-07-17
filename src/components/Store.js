import React, { useState } from 'react';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

function Store(props) {
    const { products } = props;
    const [state, setState] = useState(`view_list`);
    const handleClick = evt => {
        if (state === `view_list`) setState(`view_module`);
        else setState(`view_list`);
    };


    if (state === `view_module`) {
        return (
            <div className="main-content">
                <IconSwitch icon={state} onSwitch={handleClick} />
                <ListView items={products} />
            </div>
        )
    }

    else {
        return (
            <div className="main-content">
                <IconSwitch icon={state} onSwitch={handleClick} />
                <CardsView cards={products} />
            </div>
        )
    }


}

export default Store;