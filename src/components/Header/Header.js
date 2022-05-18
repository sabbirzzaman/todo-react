import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    const date = new Date();
    return (
        <div className="mb-5">
            <h2 className="text-4xl text-accent font-bold mb-2">
                {format(date, 'EEEE')}
            </h2>
            <h3 className="text-neutral">{format(date, 'PP')}</h3>
        </div>
    );
};

export default Header;
