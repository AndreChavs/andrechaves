import React from 'react'
import styles from '@/styles/modules/Navbar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

interface MobileMenuProps {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false)
  return (
    <nav className={styles.navbar}>
      <Logo />
      <MobileMenu mobile={mobile} setMobile={setMobile}/>
      <NavList mobile={mobile} setMobile={setMobile}/>
    </nav>
  )
}

export const Logo = () => {
  return (
    <div className={styles.logo}>
      André Chaves
    </div>
  )
}

export const MobileMenu = ({mobile, setMobile}: MobileMenuProps) => {
  function handleClick() {
    setMobile(!mobile)
  }
  return (
    <div onClick={handleClick} className={styles.mobileMenu}>
      {mobile ? (
        <i className="fas fa-times close"></i>
      ) : (
        <i className="fas fa-bars open"></i>
      )}
    </div>
  )
}

export const NavList = ({mobile, setMobile}: MobileMenuProps) => {
  const [classModule, setClassModule] = React.useState(styles.navlist);
  const router = useRouter()
  React.useEffect(() => {
    if(mobile){
      setClassModule(styles.navlistActive)
    } else {
      setClassModule(styles.navlist)
    }
  }, [mobile])
  const links: {text: string, rota: string}[] = [
    {text: 'Home', rota: '/'},
    {text: 'About', rota: '#about'},
    {text: 'Skills', rota: '#skills'},
    {text: 'Projects', rota: '#projects'},
    {text: 'Contato', rota: '#contato'},
  ]
  return (
    <ul className={classModule}>
      {links.map( (link, index) => {
        return (
          <Link href={link.rota} key={index} legacyBehavior>
            <li className={(router.asPath !== link.rota)?
               styles.itemlist : styles.itemlistActive}
              onClick={() => setMobile(false)}
            >
              <a>{link.text}</a>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default Navbar