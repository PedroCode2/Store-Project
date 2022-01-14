import Card from "../../components/structure/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function WishList () {
  const [wishlist, setWishlist] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("user/userList", config).then((reponse) => {
        setWishlist(reponse.data.games);
      });
    }
  }, [mounted]);

  return (
    <div className="container">
      <h1 className="text-center h1">Product List</h1>
      <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <Card
              id={product.id}
              image={product.imageUrl}
              name={product.name}
              key={product.id}
              price={product.price}
            />
          ))
        ) : (
          <h2>Lista vazia</h2>
        )}
      </div>
    </div>
  );
}
