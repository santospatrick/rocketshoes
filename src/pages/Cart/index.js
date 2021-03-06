import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';
import {
    updateAmountRequest,
    removeFromCart,
} from '../../store/modules/cart/actions';

function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (acc, product) => acc + product.price * product.amount,
                0
            )
        )
    );

    function increment(product) {
        dispatch(updateAmountRequest(product.id, product.amount + 1));
    }

    function decrement(product) {
        dispatch(updateAmountRequest(product.id, product.amount - 1));
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.image}
                                    alt="Tenis no carrinho"
                                />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(removeFromCart(product.id))
                                    }
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

Cart.propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf().isRequired,
    updateAmountRequest: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
};

export default Cart;
