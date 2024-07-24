import React from 'react'
import styles from '@/styles/modules/Navbar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


interface MobileMenuProps {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setClassModule: React.Dispatch<React.SetStateAction<string>>;
}

interface NaviListProps{
  classModule:string;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setClassModule: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false)
  const [classModule, setClassModule] = React.useState(styles.navlist);

  return (
    <nav className={styles.navbar}>
      <Logo />
      <MobileMenu mobile={mobile} setMobile={setMobile} setClassModule={setClassModule} />
      <NavList setMobile={setMobile} classModule={classModule} setClassModule={setClassModule}/>      
    </nav>
  )
}


const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={"/logo.png"} width={292} height={160} alt='logo actech'/>
    </div>
  )
}

const MobileMenu = React.memo(
  ({mobile, setMobile, setClassModule}: MobileMenuProps) => {

    const handleClick = React.useCallback(async() => {
      setMobile(!mobile)
      if(mobile){
        setClassModule(styles.navlist)
      }else{      
        setClassModule(styles.navlistActive)
      }
      
    },[])

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
)

const NavList = React.memo(({setMobile, classModule, setClassModule}: NaviListProps) => { 
    const router = useRouter()
  
    const links: {text: string, rota: string}[] = [
      {text: 'Início', rota: '/'},    
      {text: 'Contato', rota: '/contato'},    
      {text: 'Blog', rota: '/posts'},
    ]
    
    return (
      <>
      {classModule && 
        <ul className={classModule}>
          {links.map( (link, index) => {
            return (
              <Link href={link.rota} key={index} legacyBehavior>
                <li className={(router.asPath !== link.rota)?
                  styles.itemlist : styles.itemlistActive}
                  onClick={() => {
                    setMobile(false)
                    setClassModule(styles.navlist)
                  }}>
                  <a>{link.text}</a>
                </li>
              </Link>
            )
          })}
        </ul>
      }
      </>
    )
  }
)

export default Navbar