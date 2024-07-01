import NavButton from "../components/NavButton";
import { CarullaContext } from "../context/CarullaContext";
import styles from "./NavBar.module.css";
import {
  faCartShopping,
  faCar,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

function NavBar() {
  // esto es un estado "" string vacio
  const [textoBusqueda, setTextoBusqueda] = useState("");
  //console.log(textoBusqueda);
  const { getAllCarulla } = useContext(CarullaContext);

  return (
    <>
      <header>
        <div className={styles["headertotal"]}>
          <div className={styles["headeruno"]}>
            <NavButton icon={faCar} href="#" />
            <NavButton icon={faCar} href="#" />
          </div>
          <div className={styles["headercentro"]}>
            <p>¿Cómo quieres recibir tu pedido?</p>
            <input
              type="text"
              autoComplete="off"
              value={textoBusqueda}
              onChange={(ev) => {
                setTextoBusqueda(ev.target.value);
              }}
              placeholder="Nombre Cliente"
            />
            <button
              onClick={() => {
                getAllCarulla(textoBusqueda);
              }}
            >
              Busquedas multiple{" "}
            </button>
          </div>
          <div className={styles["headerdos"]}>
            <NavButton icon={faBasketShopping} href="#" />
            <NavButton icon={faCar} href="#" />
            <NavButton icon={faCar} href="#" />
            <NavButton icon={faCar} href="#" />
            <NavButton icon={faCartShopping} href="/carrito" />
            <p>hola</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
