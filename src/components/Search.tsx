import { useEffect, useState, type ReactHTMLElement } from "react"

export const SearchBar = () => {

    const [inputVal, setInputVal] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(event.target.value);
    }

    useEffect(() => {
        console.log(inputVal);
    }, [inputVal])

    return (
        <input type="text" onChange={handleInputChange}/>
    )
}