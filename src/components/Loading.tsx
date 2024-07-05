import React from 'react'
import stylesLoading from '@/styles/modules/Loading.module.css'
import { ProgressSpinner } from 'primereact/progressspinner'

interface LoadingProps{
  loading?:boolean 
}

const Loading = ({loading}:LoadingProps) => {
  return (
    <>
    {loading && <div className={stylesLoading.containerLoading}>
        <ProgressSpinner className={stylesLoading.loading}/>
      </div>}
    </>
  )
}

export default Loading