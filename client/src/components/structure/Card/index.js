import "./card.css";
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Card(props) {
  const navigate = useNavigate();
  const [productAdded, setProductAdded] = useState(false);
  const [productError, setProductError] = useState(false);

  const goToProductPage = () => {
    navigate("/Product", { state: props.id });
  };

  const wishGame = async () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const id = props.id;

    await axios.patch(`/user/addfav/${id}`, "", config).then((response) => {
      if (response.data.status !== 200) {
        setProductError(true);
      }
    });
  };

  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top cardimg "
        alt={props.name}
        onClick={goToProductPage}
      />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.description}</p>
        <span>{"R$:" + props.price}</span>
        <button onClick={wishGame}>
          <FaRegHeart />
        </button>
      </div>
      {
        productError ? (
          <p>Jogo não adicionado</p>
        ) : ('')
      }
    </div>
  );
}
