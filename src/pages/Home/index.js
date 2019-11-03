import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

function Home({ addToCartRequest, amount }) {
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

    const handleAddProduct = id => {
        addToCartRequest(id);
    };

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />{' '}
                            {amount[product.id] || 0}
                        </div>
                        <span>adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

Home.propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape({
        [PropTypes.number]: PropTypes.number,
    }).isRequired,
};

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
