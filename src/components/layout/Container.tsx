import React, { CSSProperties, ReactNode } from 'react'
import styles from '@/styles/modules/Container.module.css'

interface PropsContainer{
  children?: ReactNode;
  className?: [key: string] | string;
  style?: CSSProperties;
}

const Container = ({children, className, style}:PropsContainer) => {
  const componentStyles = [styles.container, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export default Container