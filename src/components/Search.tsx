import { useEffect, useState, type ReactHTMLElement } from "react"

export const SearchBar = () => {

    const [inputVal, setInputVal] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputVal(value);

        if (value.length >= 3) {
            // fetch from api if at least 3 characters have been implemented
        }
    }

    useEffect(() => {
        console.log(inputVal);
    }, [inputVal])

    return (
        <input type="text" onChange={handleInputChange}/>
    )
}