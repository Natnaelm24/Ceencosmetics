import { createContext, useContext, useState } from "react";

const SkinConcernContext = createContext();

export function SkinConcernProvider({ children }) {
  const [concerns, setConcerns] = useState([]);

  return (
    <SkinConcernContext.Provider value={{ concerns, setConcerns }}>
      {children}
    </SkinConcernContext.Provider>
  );
}

export function useSkinConcerns() {
  return useContext(SkinConcernContext);
}
