import './NavBar.css'
import MenuLink from '../MenuLink'

const NavBar = () => {
    return(
        <div className="navbar">
            <img src="/img/logo.png" alt="" />
            <div>
                <MenuLink to="/">
                <p>Home</p>
                </MenuLink>

                <MenuLink to="/produtos">
                    <p>Produtos</p>
                </MenuLink>

                <MenuLink to="/doacao">
                <p>Doação</p>
                </MenuLink>

                <MenuLink to="/sobre">
                <p>Sobre</p>
                </MenuLink>
            </div>

        </div>
    )
}

export default NavBar;