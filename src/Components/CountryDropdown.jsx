import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countryAction';

const Transition = React.forwardRef(function Transition(
    props,
    ref,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const countriesData = useSelector(state => state.countries.countries);
    useEffect(() => {
        dispatch(getCountries());
    }, [])
    const selectCountry = (i) => {
        setSelectedCountry(countriesData[i].country);
        setIsOpenModal(false);
    }
    console.log("countriesData", countriesData)
    return <>
        <Button className='countryDropdown' onClick={() => setIsOpenModal(true)}>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>{selectedCountry}</span>
            </div>
            <span className='ml-auto'><FaAngleDown /></span>
        </Button>

        <Dialog open={isOpenModal} className='locationModal' onClose={() => setIsOpenModal(false)} TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your delivery location</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
            <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>
            <div className='headerSearch w-100 mb-3'>
                <input type='text' placeholder="Search your area" />
                <Button><IoIosSearch /></Button>
            </div>
            {   countriesData?.length !== 0 
                ? <ul className='countryList'>
                {
                    countriesData.map((country,i) => <li key={i} className={selectCountry === country.country ? 'active' : ''}>
                            <Button 
                           onClick={()=>selectCountry(i)}
                            >{country.country}</Button>
                        </li>
                    )
                }
                </ul>
                : <></>
            }
        </Dialog>
    </>
}

export default CountryDropdown;