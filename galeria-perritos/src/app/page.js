import Image from "next/image";
import style from "./page.module.css";
import Foto from "./components/Foto";

export default function Home() {
  return ( 
    <div className={style["main"]}>
        <div className={style["contenedor-perrito"]}>
          <Foto/>
          <Foto/>
          <Foto/>
          <Foto/>
          <Foto/>
          <Foto/>
        </div>
    </div>
  );
}
