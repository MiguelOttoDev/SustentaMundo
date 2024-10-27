import { createContext, useContext, useState, useEffect } from 'react';

const SmcContext = createContext();

export const useSmc = () => useContext(SmcContext);

export const SmcProvider = ({ children }) => {
  const [smc, setSmc] = useState(() => {
    try {
      const storedSmc = localStorage.getItem('smc');
      return storedSmc ? parseFloat(storedSmc) : 0;
    } catch (error) {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem('smc', smc);
  }, [smc]);

  return (
    <SmcContext.Provider value={{ smc, setSmc }}>
      {children}
    </SmcContext.Provider>
  );
};
