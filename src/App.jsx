import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import { Link } from 'react-router-dom';


function App({ inpValue }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const url = inpValue.trim() === ""
        ? 'https://dummyjson.com/products'
        : `https://dummyjson.com/products/search?q=${inpValue}`;

      fetch(url)
        .then(res => res.json())
        .then(res => setData(res.products));
    }, 1000);

    return () => clearTimeout(timer);
  }, [inpValue]);







  return (
    <div className="App">
      <h1 className='text-[50px] text-center pt-[60px]'>Products</h1>
      <div className='max-w-[1440px] m-auto p-3'>
        <div className='flex justify-center flex-wrap items-center gap-[20px] text-center mt-5'>
          {data.map((e) => (

            <Link to={`/products/${e.id}`} key={e.id} >
              <Cards title={e.title} imageUrl={e.images[0]} />
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
