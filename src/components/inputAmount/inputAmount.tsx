import { useState } from 'react';
import './inputAmount.scss'

const InputAmount = () => {

    const [inputValue, setInputValue] = useState("")

    const formatNumber = (number: string) => {
        return number.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };


    const handleChange = (event: any) => {
        const formattedValue = formatNumber(event.target.value);
        setInputValue(formattedValue);
    }


    return (
        <input value={inputValue} onChange={event => handleChange(event)} placeholder='500,000' type="text" className='input-amount' />
    )
}

export default InputAmount;