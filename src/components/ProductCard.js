import React, { useState, useEffect } from 'react';
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import card1 from '../resouse/image 1.png';
import card2 from '../resouse/image 2.png';
import card3 from '../resouse/image 2.png';
import card4 from '../resouse/image 3.png';
import card5 from '../resouse/image 4.png';
import card6 from '../resouse/image 5.png';
import card7 from '../resouse/image 6.png';
import card8 from '../resouse/image 7.png';
import card9 from '../resouse/image 8.png';
import card10 from '../resouse/image 9.png';
import card11 from '../resouse/image 10.png';
import card12 from '../resouse/image 11.png';
import card13 from '../resouse/image 12.png';
import card14 from '../resouse/image 13.png';
import card15 from '../resouse/image 14-1.png';
import card16 from '../resouse/image 15.png';
import card17 from '../resouse/image 16.png';
import card18 from '../resouse/image 17.png';
import card19 from '../resouse/image 18.png';
import card20 from '../resouse/image 19.png';


const products = [
    { image: card1, name: 'Tree 1' },
    { image: card2, name: 'Tree 2' },
    { image: card3, name: 'Tree 3' },
    { image: card4, name: 'Tree 4' },
    { image: card5, name: 'Plant 1' },
    { image: card6, name: 'Plant 2' },
    { image: card7, name: 'Plant 3' },
    { image: card8, name: 'Plant 4' },
    { image: card9, name: 'Tray' },
    { image: card10, name: 'Soil' },
    { image: card11, name: 'Soil 2' },
    { image: card12, name: 'Spade' },
    { image: card13, name: 'Duck 1' },
    { image: card14, name: 'Duck 2' },
    { image: card15, name: 'Duck 3' },
    { image: card16, name: 'Duck 4' },
    { image: card17, name: 'Pot 1' },
    { image: card18, name: 'Pot 2' },
    { image: card19, name: 'Pot 3' },
    { image: card20, name: 'Pot 4' },
    { image: card1, name: 'Tree 1' },
    { image: card2, name: 'Tree 2' },
    { image: card3, name: 'Tree 3' },
    { image: card4, name: 'Tree 4' },
    { image: card5, name: 'Plant 1' },
    { image: card6, name: 'Plant 2' },
    { image: card7, name: 'Plant 3' },
    { image: card8, name: 'Plant 4' },
    { image: card9, name: 'Tray' },
    { image: card10, name: 'Soil' },
    { image: card11, name: 'Soil 2' },
    { image: card12, name: 'Spade' },
    { image: card13, name: 'Duck 1' },
    { image: card14, name: 'Duck 2' },
    { image: card15, name: 'Duck 3' },
    { image: card16, name: 'Duck 4' },
    { image: card17, name: 'Pot 1' },
    { image: card18, name: 'Pot 2' },
    { image: card19, name: 'Pot 3' },
    { image: card20, name: 'Pot 4' },
];


const product = [
    { image: card1, name: 'Tree 1', subtitle: 'Three Leaf Clover...', description: 'A caudiciform plant...', careGuide: { water: 'Allow the soil...', light: 'Bright indirect light...', tips: 'Gently insert a...' } },
    { image: card2, name: 'Tree 2', subtitle: 'Another description...', description: 'Another detailed description...', careGuide: { water: 'Water this way...', light: 'Place in this light...', tips: 'Tip for this plant...' } },
    // Add more products as needed
];

const ITEMS_PER_PAGE = 20;

function ProductCard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get("page")) || 1;
        setPage(page);
    }, [location]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        navigate(`?page=${newPage}`);
    };

    const handleCardClick = (product) => {
        navigate('/description', { state: { product } });
    };

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div>
            <div className='cardspace'>
                {selectedProducts.map((product, index) => (
                    <div className='card' key={index} onClick={() => handleCardClick(product)}>
                        <img src={product.image} alt={product.name}></img>
                        <h2>{product.name}</h2>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                setPage={handlePageChange}
                total={Math.ceil(products.length / ITEMS_PER_PAGE)}
            />
        </div>
    );
}

export default ProductCard;
