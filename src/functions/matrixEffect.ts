export const matrixEffect = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const katakana = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops:number[] = Array.from({ length: columns }).fill(1) as number[];
    
    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#034aa6';
      ctx.font = `${fontSize}px monospace`;

      rainDrops.forEach((y, i) => {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      });
    };
   return draw
}