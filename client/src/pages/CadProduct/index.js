import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CadProduct() {
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const amount = ev.target.amount.value;
    const description = ev.target.description.value;
    const price = ev.target.price.value;
    const imageUrl = ev.target.imageUrl.value;

    const product = {
      name: name,
      amount: amount,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
    axios.post("/products/create", product).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">SingUp a P roduct</h3>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Insert name of product "
                required
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="number"
                name="amount"
                className="form-control"
                id="amount"
                placeholder="Insert amount of product"
                required
              />
              <label htmlFor="amount">Amount:</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
                placeholder="Insert description"
                required
              />
              <label htmlFor="description">Description:</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="float"
                name="price"
                className="form-control"
                id="price"
                placeholder="Insert Your price"
                required
              />
              <label htmlFor="price">Price:</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                id="imageUrl"
                placeholder="Insert a imageUrl"
                required
              />
              <label htmlFor="imageUrl"> imageUrl:</label>
            </div>
          </div>
          <div className="col-8 "></div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex justify-content-center  gap-2 ">
              <button className="btn btn-success " type="submit">
                Cadastrar
              </button>
              <Link to="/">
                <button className="btn btn-danger">Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
