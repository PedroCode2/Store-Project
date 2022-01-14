import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile () {

    const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/profile', config)
      .then(response => {
        setUser(response.data);
        setLogged(true);
      })
    }
  }, [mounted])

  const handleLogoff = () => {
    localStorage.removeItem('token');
  }

  return (
    <div>
    {
        logged ? (
          <>
            <img src={user.imageUrl} alt={user.name} />
            <span><strong>Nome:</strong> {user.name}</span>
            <span><strong>Nickname:</strong> {user.nickname}</span>
            <span><strong>Membro desde:</strong> {user.createdAt}</span>
            <button onClick={handleLogoff}>Logoff</button>
          </>
        ) : (
          <>
          <h3>Sem dados no perfil faça login!</h3>
            <Link to='/Login'>  
            Logue-se
             </Link>
          </>
        )
      }
      </div>
  )
}