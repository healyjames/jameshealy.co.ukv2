import React from 'react';
import type { Location } from './Search';

interface SearchDropdownProps {
    locations: Location[];
}

export const SearchDropdown = ({ locations }: SearchDropdownProps) => {
    return (
        <div>
            {locations.map((location, index) => (
                <div key={index}>
                    {location.Name}
                </div>
            ))}
        </div>
    )
}