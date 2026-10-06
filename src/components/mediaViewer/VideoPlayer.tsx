// CORRECCIÓN: Ocultar controles al girar el teléfono (horizontal/vertical)
useEffect(() => {
  const handleOrientationChange = () => {
    // Limpiamos la posición del puntero para que isMouseInsideControls() devuelva false
    lastMousePositionRef.current = undefined;
    // Forzamos la ocultación de los controles
    toggleControls(false);
  };

  window.addEventListener('orientationchange', handleOrientationChange);
  window.addEventListener('resize', handleOrientationChange);

  return () => {
    window.removeEventListener('orientationchange', handleOrientationChange);
    window.removeEventListener('resize', handleOrientationChange);
  };
}, [toggleControls]);
