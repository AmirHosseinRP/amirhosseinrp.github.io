import { useEffect, useState } from 'react';

function useScrollAmount(): number {
    const [scrollAmount, setScrollAmount] = useState<number>(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollAmount(window.scrollY);
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array to run the effect only once
  
    return scrollAmount;
  }
  
  export default useScrollAmount;
  