import React, { CSSProperties, ReactNode } from 'react'
import styles from '@/styles/modules/Grids.module.css'

interface GridProps{
  children?: ReactNode;
  style?: CSSProperties;
  className?: [key: string] | string;
}

export const Grid01 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid01, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid02 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid02, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid03 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid03, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid04 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid04, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid05 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid05, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid06 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid06, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid07 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid07, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid08 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid08, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid09 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid09, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid10 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid10, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid11 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid11, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}

export const Grid12 = ({children, className, style}:GridProps) => {
  const componentStyles = [styles.grid12, className]
  return (
    <div className={componentStyles.join(' ')} style={style}>
      {children}
    </div>
  )
}