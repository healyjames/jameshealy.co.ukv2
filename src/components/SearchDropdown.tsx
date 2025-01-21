import React from 'react';
import type { Location } from './Search';

interface SearchDropdownProps {
    locations: Location[];
}

const handleOnClick = ( location: Location ) => {
    window.location.href = `https://www.persimmonhomes.com/find-your-new-home/search-results?placeId=${location.PlaceId}&Location=${location.Name}`;
}

export const SearchDropdown = ({ locations }: SearchDropdownProps) => {
    return (
        <div>
            {locations.map((location, index) => (
                <div key={index} onClick={() => handleOnClick(location)}>
                    {location.Name}
                </div>
            ))}
        </div>
    )
}