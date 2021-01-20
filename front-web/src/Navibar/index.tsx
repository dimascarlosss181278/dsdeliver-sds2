import './styles.css';
import { ReactComponent as Logo} from './logo.svg';

//criando componente
function Navbar() {
    return (
        //criar a classe main-navbar 
        <nav className="main-navbar" >
           <Logo />
           <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;