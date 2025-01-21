import { useEffect, useState, type ReactHTMLElement } from "react"

export const SearchBar = () => {

    const [inputVal, setInputVal] = useState<string>('')

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputVal(value);

        if (value.length >= 3) {
            try {
                const response = await fetch(`https://www.persimmonhomes.com/umbraco/Api/LocationsSearch/GetPlaces?searchKeyword=${value}&sessionToken=34bxqruj25jx74wbrqweih`); // hardcoded token purely for a working example. 

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json()

                console.log(data)

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