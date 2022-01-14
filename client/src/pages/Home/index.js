import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/structure/Card";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [montado, setMontado] = useState(false);

  const getProduct = async () => {
    await axios.get("/products/findMany").then((response) => {
      if (montado) {
        setProduct(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getProduct();
  }, [montado]);

  return (
    <div className="container">
      <h1 className="text-center h1">Product List</h1>
      <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
        {product.map((item) => (
          <Card
            id={item.id}
            image={item.imageUrl}
            name={item.name}
            key={item.id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
