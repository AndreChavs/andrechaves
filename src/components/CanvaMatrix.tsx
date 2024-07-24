import React from "react";
import matrixEffect from '@/functions/matrixEffect'


const CanvaMatrix = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);  
  
  const drawEffectMatrix = React.useCallback(() => {    
    if(canvasRef.current){
      const effectDraw = matrixEffect(canvasRef.current)
      return effectDraw
    }
    return () => {};
  }, [])
  
  
  React.useEffect(() => {

    const draw = drawEffectMatrix();
    if(draw){
      const intervalId = setInterval(draw, 50);
      return () => {
        clearInterval(intervalId);
      };
    }
  },[])
  
  return <canvas ref={canvasRef} id='canvas' style={{
    display: "block",
    position: "absolute",
    backgroundColor: "var(--second)",
    zIndex: "0",
  }}></canvas>
}

export default React.memo(CanvaMatrix)