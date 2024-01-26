import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/Pokemon";

export default function Home() {
  return (
    <div>      
      <Pokemon/>
    </div>
  );
}
