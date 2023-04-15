import { useEffect, useRef } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export default function Header({ greet, setLinkRef }) {
  const linkRef = useRef(null);

  useEffect(() => {
    // Mounting
    setLinkRef(linkRef.current);
    console.log('Header mount');

    return () => {
      // Unmounting
      // must use with useRef to determine whether the component has been removed
      if (!linkRef.current) {
        alert('Please say something!');
      }
    };
  }, []);

  return greet.toLowerCase().includes('react') ? (
    <a href="https://reactjs.org" target="_blank" ref={linkRef}>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  ) : (
    <a href="https://vitejs.dev" target="_blank" ref={linkRef}>
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
  );
}
