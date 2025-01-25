import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { Button } from "@mui/material";
import { IoMdHeartEmpty } from 'react-icons/io';
import ProductModal from './ProductModal';
import { useState } from 'react';

const ProductItem = props =>{
    const [isOpenProductModal, setIsOpenProductModal] = useState(false);
    const viewProductDetails = (productId) => {
        setIsOpenProductModal(true);
    }
    return <>
    
    <div className="item productItem">
    <div className="imgWrapper">
        <img alt="" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100" />
        <span className="badge badge-primary">28% </span>
    </div>
    <div className="actions">
        <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
        <Button><IoMdHeartEmpty style={{fontSize: "20px"}}/></Button>
    </ div>
    <div className="info">
        <h4>Werther’s Original Caramel Hard Candies</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating className="mt-2" name="read-only" value={5} readOnly size='small'precision={0.5}/>
        <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="newPrice text-danger ml-2">$14.00</span>
        </div>
    </div>
</div>
{
    isOpenProductModal === true && 
    <ProductModal
    isOpenProductModal = {isOpenProductModal}
    closeProductModal = {()=> setIsOpenProductModal(false)}
    />
}
    </>
}

export default ProductItem;