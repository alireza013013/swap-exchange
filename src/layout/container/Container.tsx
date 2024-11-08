import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Container.scss'
import { Outlet } from 'react-router-dom';


const Container = () => {
    return (
        <div className='main-container'>
            <Header />
            <div className='container-pages'>
                <Outlet />
            </div>
            <Footer />
        </div >
    )
}

export default Container;