import './Header.css'
import Logo from '../../assets/img/Logo.png'

const Header = () => {
    return(
        <header className='header'>
            <img className='logo' src={Logo} alt="Logo" />
            <ul className='header-items'>
                <li className='item'>Inicio </li>
                <li className='item'>Categorias</li>
                <li className='item'>Ventas</li>
                <li className='item'>Retiro</li>
                <li className='item'>Contacto</li>
            </ul>
        </header>
    );
}

export default Header;