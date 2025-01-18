import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navigation = props => {
    const [isOpenSidebarNav,setIsOpenSidebarNav] = useState(false);

    return <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-2 navpart1'>
                    <div className='catWrapper'>
                        <Button className='allCatTab align-items-center' onClick={()=>setIsOpenSidebarNav(!isOpenSidebarNav)}>
                            <span className='icon1 mr-2'><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown /></span>
                        </Button>
                        <div className={`sidebarNav ${isOpenSidebarNav === true ? 'open' : ''}`} >
                            <ul>
                                <li>
                                    <Link to="/"><Button>Men<FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>    
                                </li>
                                <li><Link to="/"><Button>Woman <FaAngleRight className='ml-auto'/></Button></Link>
                                <div className='submenu'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>    
                                </li>
                                <li><Link to="/"><Button>Beauty</Button></Link></li>
                                <li><Link to="/"><Button>Watches</Button></Link></li>
                                <li><Link to="/"><Button>Kids</Button></Link></li>
                                <li><Link to="/"><Button>Gift</Button></Link></li>
                                <li><Link to="/"><Button>Men</Button></Link></li>
                                <li><Link to="/"><Button>Woman</Button></Link></li>
                                <li><Link to="/"><Button>Beauty</Button></Link></li>
                                <li><Link to="/"><Button>Watches</Button></Link></li>
                                <li><Link to="/"><Button>Kids</Button></Link></li>
                                <li><Link to="/"><Button>Gift</Button></Link></li> 

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 navpart2 d-flex align-items-center'>
                    <ui className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Men</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Women</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Beauty</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Watches</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Kids</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Gift</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Blog</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/"><Button>Contact Us</Button></Link>
                            <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                            </div>
                        </li>
                    </ui>

                </div>
            </div>
        </div>
    </nav>
}

export default Navigation;