import Buscador from "../Buscador";
import { useState } from 'react';
import Filtros from "../Filtros";
import styles from './Home.module.scss'



export default function Home(){
  const [busca, setBusca] = useState("");
    return(
        <div className="bg-indigo-500 text-indigo-50">
      <header>
        <ul className="list-none flex justify-center gap-4">
        <Buscador busca={busca} setBusca={setBusca}/>
          <div className={styles.cardapio__filtros}>
          </div>
        </ul>
        <Filtros/>
      </header>
    
    </div>
    )
}