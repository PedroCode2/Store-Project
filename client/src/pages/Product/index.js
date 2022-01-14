import { FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Product.css'

import { useEffect, useState } from 'react';

export default function Product () {
    const state = useLocation();
    const id = state.state;

    const [product, setProduct] = useState({});
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`/products/find/${id}`)
        .then(response => {
          setProduct(response.data)
        })
      }

      useEffect(() => {
        setMounted(true)
        getData()
      }, [mounted])
      
      return( 
        <div className="card d-flex justify-content-center">
        <img
          src={product.imageUrl}
          className="card-img-top producimg "
          alt={product.name}
        />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <span>{"R$:" + product.price}</span>
          <button>
            <FaRegHeart />
          </button>
        </div>
      </div>
      )
}