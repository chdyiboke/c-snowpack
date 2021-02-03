import React, { useRef, useEffect } from "react"


function useTimeout(fn, delay){
  const ref = useRef(null);
  ref.current = fn

  useEffect(()=>{
    if(delay === undefined || delay === null) return;
    const timer = setTimeout(()=>{
      ref.current?.();
    }, delay)
    return () => clearTimeout(timer);
  }, [delay]);
}
export { useTimeout }
