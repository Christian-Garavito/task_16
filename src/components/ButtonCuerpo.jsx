import styles from './ButtonCuerpo.module.css';
import { Link } from "react-router-dom";





function NavButton({ title, href }) {

  return (
    <Link className={styles['nav-link']} to={href}>
      {title}
    </Link>
  );
}

export default NavButton;
