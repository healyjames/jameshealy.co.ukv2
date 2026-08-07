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
        <div className="px-2 pt-4 pb-2 border-b border-l border-r border-slate-700 -mt-2 rounded-b-xl">
            {locations.map((location, index) => (
                <div role="button" tab-index="0" key={index} onClick={() => handleOnClick(location)} className="px-2 py-1 my-1 hover:bg-slate-600 rounded-md">
                    {location.Name}
                </div>
            ))}
        </div>
    )
}