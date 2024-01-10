import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

//    const [products, error, loading] = useCustomReactQuery('/api/products');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch]= useState('wood');

    useEffect(() => {
        const controller = new AbortController();

        const sendRequest = async () => {
                try{
                    setLoading(true);
                    setError(false);
                    const response = await axios.get('/api/products?search=' + search, {
                        signal: controller.signal
                    });
                    setProducts(response.data);
                    setLoading(false);
                } catch(err) {
                    if(axios.isCancel(err)){
                        console.log('Axios Request canceled :)', err.message);
                        return;
                    }
                    setError(true); 
                }
            }

        const id = setTimeout(() => {
            sendRequest();
        }, 200)

        return () => {
            controller.abort();
            clearTimeout(id)
        }
    }, [search])

    return (
        <>
        <h1>Chai aur API in React</h1>
        <input type={search} onChange={(e) => setSearch(e.target.value)} />
        {error?<h2>Something went wrong</h2>:null}
        {loading?<h2>Loading...</h2>:
        <h2>Number of products are : {products.length}</h2>
        }
        </>
    )
}

export default App

const useCustomReactQuery = (urlPath) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try{
                setLoading(true);
                setError(false);
                const response = await axios.get(urlPath);
                setProducts(response.data);
                setLoading(false);
            } catch(err) {
                setError(true); 
            }
        })()
    }, [urlPath])

    return [products, error, loading]
}
