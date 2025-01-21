import { useEffect, useState, type ReactHTMLElement } from "react"

interface Location {
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

                setLocations(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }

    useEffect(() => {
        console.log(inputVal);
    }, [inputVal])

    return (
        <input type="text" onChange={handleInputChange}/>
    )
}