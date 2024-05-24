import { Header } from "./components/Header/Header"

import './global.css'
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"


function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>Posts</main>
      </div>
    </>
  )
}

export default App
