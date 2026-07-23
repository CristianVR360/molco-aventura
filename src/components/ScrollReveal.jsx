import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  direction = 'up' 
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it has animated, we can unobserve to avoid layout calculations
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits viewport edge
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return 'translate-x-8';
      case 'right': return '-translate-x-8';
      case 'none': return '';
      default: return 'translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${className} ${
        isIntersecting 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${getDirectionClass()}`
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
