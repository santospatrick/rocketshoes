import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProduts() {
            const response = await api.get('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        getProduts();
    }, []);

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" /> 3
                        </div>
                        <span>adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

export default Home;
