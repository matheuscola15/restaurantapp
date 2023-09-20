import styles from '../home/Home.module.scss'
import logo2 from '../assets/header.png'

export default function Home(){
    return(
        <main>
            <nav className={styles.menu}>
                <img src={logo2} alt="" className={styles.logo}/>
            </nav>
        </main>
    )
}