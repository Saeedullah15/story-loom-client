import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

    return (
        <>
            <section className='lg:max-w-7xl mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </>
    )
}

export default App
