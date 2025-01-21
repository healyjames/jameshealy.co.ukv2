import { useEffect, useState, type ReactHTMLElement } from "react"
import { SearchDropdown } from "./SearchDropdown"

export interface Location {
    Latitude: number
    Longitude: number
    Name: string
    PlaceId: string
    PlaceType: string // Probably needs its own type. For now, this is fine
}

export const SearchBar = () => {

    const [inputVal, setInputVal] = useState<string>('');
    const [locations, setLocations] = useState<Location[]>([]);

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputVal(value);

        if (value.length >= 3) {
            try {
                const response = await fetch(`https://www.persimmonhomes.com/umbraco/Api/LocationsSearch/GetPlaces?searchKeyword=${value}&sessionToken=34bxqruj25jx74wbrqweih`); // hardcoded token purely for a working example. 

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if(!data || data.length < 1) {
                    console.log("no results")
                }

                setLocations(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            setInputVal('');
            setLocations([]);
        }
    }

    return (
        <div className="w-6/12 flex flex-col flex-nowrap justify-center">
            <input type="text" onChange={handleInputChange} placeholder="Enter postcode, location or developments..." className="input input-bordered w-full"/>
            
            {locations && locations.length > 0 && (
                <SearchDropdown locations={locations} />
            )}
        </div>
    )
}