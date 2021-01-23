import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

//criando componente
function Navbar() {
    return (
        //criar a classe main-navbar 
        <nav className="main-navbar">
           <Logo />
           <Link to="/" className="logo-text">DS Delivery</Link> 
        </nav> 
    )
}

export default Navbar;