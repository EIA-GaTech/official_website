 
import { useEffect, useState, useMemo} from 'react';

export const Observer = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  // const callback = entries => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // }

  const optionsMemo = useMemo(() => {
    return {
    options
    }
   }, [options]);

   useEffect(() => {
    const observer = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
        if (!entry.isIntersecting){
          
        }
      })
    }, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
    }
  
   }, [targetRef, optionsMemo]);

   return isVisible;
}
