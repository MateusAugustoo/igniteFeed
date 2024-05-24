import style from './Header.module.css'
import igniteLogo from '../../assets/Ignite_logo.svg'

export function Header() {
  return (
    <>
      <header className={style.header}>
        <img src={igniteLogo} alt="logo do ignite" />
      </header>
    </>
  )
}