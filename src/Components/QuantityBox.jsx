import {FaMinus, FaPlus} from 'react-icons/fa6';
import Button from '@mui/material/Button';
import { useState } from 'react';
const QuantityBox = props => {
    const [cartQuantity, setCartQuantity]  = useState(1);

    const cartMinus = () => 
        cartQuantity===0 ? setCartQuantity(0) : setCartQuantity(cartQuantity-1);
    const cartPlus = () => 
        setCartQuantity(cartQuantity+1);
    
    return <div className='quantityDrop d-flex align-items-center'>
        <Button onClick={() => cartMinus()}><FaMinus /> </Button>
        <input type='text' value={cartQuantity}/>
        <Button onClick={()=> cartPlus()}><FaPlus /></Button>
    </div>
}

export default QuantityBox;