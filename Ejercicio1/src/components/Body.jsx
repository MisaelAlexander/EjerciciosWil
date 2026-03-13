import React, { useEffect, useRef } from 'react';

const Body = ({ children }) => {
  const mainRef = useRef();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      mainRef.current.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <main ref={mainRef} className="container my-4 main">
      {children}
    </main>
  );
};

export default Body;