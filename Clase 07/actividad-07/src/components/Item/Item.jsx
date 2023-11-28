import "./Item.css";
import { useState } from "react";
import Producto from "../../assets/img/Producto.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Item = () => {
  const [compra, setCompra] = useState(false);

  const handleCompra = () => {
    setCompra(!compra);
  };

  return (
    <div className="item-contendor">
      <div className="img-contenedor">
        <img className="img" src={Producto} alt="Producto" />
      </div>
      <div className="caractesristicas">
        <h1>Setup Gamer</h1>
        <p>$999.999</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non
          recusandae debitis quam saepe libero praesentium, dicta asperiores
          unde ut odio. Recusandae, sit? Distinctio, inventore consequatur nobis
          minima cupiditate porro?
        </p>
        <span>SKU: 8645</span>
        <span>Cantidad: 2</span>
        <button className="comprar" onClick={handleCompra}>
          Comprar
        </button>
        {compra && (
          <div className="compra-realizada">
            <IoIosCheckmarkCircleOutline className="icono" />
            <span className="txt">Gracias por su compra!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
