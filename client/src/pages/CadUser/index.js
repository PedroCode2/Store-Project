import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

export default function CadUser () {
  const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const name = ev.target.name.value
        const nickname = ev.target.nickname.value
        const email = ev.target.email.value
        const birthdate = ev.target.birthdate.value
        const password = ev.target.password.value
        const confirmpassword = ev.target.confirmpassword.value
        const imageUrl = ev.target.imageUrl.value

        const user = {
            name: name,
            nickname: nickname,
            email: email,
            birthdate: birthdate,
            password: password,
            confirmpassword: confirmpassword,
            imageUrl: imageUrl, 
        }
        axios.post("/user/create", user).then((resonse) => {
          navigate("/");
        })
    }


    return(
        <div className="container">
      <form onSubmit={handleSubmit} >
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">
            Sing up
          </h3>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="name"
                name='name'
                placeholder="Insert Your name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="nickname"
                className="form-control"
                id="nickname"
                placeholder="Insert Your nickname"
                required
              />
              <label htmlFor="nickname">Nickname</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
              type='email'
              name='email'
              className='form-control'
              id='email'
              placeholder='Insert Your Email'
              required
              />
              <label htmlFor="email">Email:</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 ">
            <div className="form-floating mb-2">
            <input
              type='text'
              name='birthdate'
              className='form-control'
              id='birthdate'
              placeholder='Insert Your Birthdate'
              required
              />
              <label htmlFor="birthdate">Birthdate</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="password"
                name='password'
                className="form-control"
                id="password"
                placeholder="Insert a password"
                required
              />
              <label htmlFor="password"> Password:</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="password"
                name='confirmpassword'
                className="form-control"
                id="confirmpassword"
                placeholder="Confirm Your password"
                required
              />
              <label htmlFor="confirmpassword">Confirm Password:</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                name='imageUrl'
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
    )
}