import Image from "next/image";
import style from "./page.module.css";
import Juego from "./components/Juego";

export default function Home() {
  return (
    <div className={style["app"]}>
        <Juego/>
    </div>
  );
}
