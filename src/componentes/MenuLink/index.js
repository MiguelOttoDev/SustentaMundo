import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLink = ({children, to}) => {

    const loc = useLocation()

    return (
        <Link className={`${styles.link} ${ loc.pathname === to ?  styles.underline : ''} `} to={to} > {children} </Link>

    )
}

export default MenuLink;