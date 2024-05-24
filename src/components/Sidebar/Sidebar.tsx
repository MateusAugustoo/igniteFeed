import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover} 
        src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      />

      <div className={style.profile}>
        <img
          className={style.avatar} 
          src="https://github.com/MateusAugustoo.png" 
          alt="photo profile" 
        />

        <strong className={style.nameProfile}>Mateus Augusto</strong>
        <span>Web Develop</span>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}