import { Outlet } from "react-router-dom"
import styles from './root.module.css'
import Navbar from "../components/navbar/Navbar"

const Root = () => {
  return (
    <div className={styles.root__container}>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default Root