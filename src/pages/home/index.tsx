import Buscador from "../Buscador";
import { useState } from 'react';
import Filtros from "../Filtros";
import styles from './Home.module.scss'



export default function Home(){
  const [busca, setBusca] = useState("");
    return(
    <div className="bg-gradient-to-b from-rose-950 to-rose-900 ">
      <header>
        <ul className="list-none flex justify-center gap-4 ">
          <div className={styles.cardapio__filtros}>
          <Buscador busca={busca} setBusca={setBusca}/>
          <Filtros/>
          </div>
        </ul>
      </header>
    </div>
    
    )
}