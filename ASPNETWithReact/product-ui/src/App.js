import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('https://localhost:7171/api/products') 
      .then(res => {
        console.log('Produtos recebidos:', res.data);  
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar produtos:', err); 
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Produtos</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {products.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong> - R$ {p.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;