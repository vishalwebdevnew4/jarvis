import { createContext, useContext, useMemo, useState } from 'react';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [listening, setListening] = useState(false);

  const value = useMemo(
    () => ({ onboardingComplete, setOnboardingComplete, listening, setListening }),
    [onboardingComplete, listening]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
}
