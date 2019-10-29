import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis mto legal</strong>
                <span>R$120,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis mto legal</strong>
                <span>R$120,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis mto legal</strong>
                <span>R$120,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis mto legal</strong>
                <span>R$120,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis mto legal</strong>
                <span>R$120,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home;
