import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import './App.css'
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { setPosts } from './store/postSlice';
import appwriteService from './appwrite/config';

function App() {
    const [loading, setLoading]  = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if(userData){
                    dispatch(login(userData));
                }
                else{
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false)) 
    }, [])

    useEffect(() => {
        appwriteService.getPosts([])
            .then((data) => {
                if(data) {
                    dispatch(setPosts(data.documents))
                }
            } )
    }, [])

  return loading ? null : <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
            <div className='w-full block'>
            <Header />
            <main>
                Todo:
                <Outlet />
            </main>
            <Footer/>
            </div>
        </div>
}

export default App
