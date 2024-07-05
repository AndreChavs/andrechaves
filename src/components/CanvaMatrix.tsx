import React from "react";
import matrixEffect from '@/functions/matrixEffect'


interface CanvaMatrixProps{
  className:[key: string] | string; 
}


const CanvaMatrix = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  // const componentStyles = [className]
  
  const drawEffectMatrix = React.useCallback(() => {
    if(canvasRef.current){
      const effectDraw = matrixEffect(canvasRef.current)
      return effectDraw
    }
    return () => {};
  }, [])
  
  
  React.useEffect(() => {

    console.log("Matrix Effect")
    
    async function timeMatrix() {
      const draw = drawEffectMatrix();      
      const timePromise:Promise<{intervalId:NodeJS.Timer, timeOut:NodeJS.Timer}> = new Promise((resolve) => {
        const timeOut = setTimeout(() => {
          const intervalId = setInterval(draw, 50)
          resolve({intervalId, timeOut})
        },200)
      })
      return timePromise         
    }


    return () => {
      timeMatrix().then(({intervalId, timeOut}) => {
        return () => {
          clearTimeout(timeOut);
          clearInterval(intervalId);
        }
      })
    };
  },[])
  
  return <canvas ref={canvasRef}  style={{
    display: "block",
    position: "absolute",
    backgroundColor: "var(--second)",
    zIndex: "0",
  }}></canvas>
}

export default CanvaMatrix