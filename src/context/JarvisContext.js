import { AppState } from 'react-native';
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { checkMicPermission } from '../services/permissionService';
import {
  initialState,
  jarvisReducer,
  panicOff,
  startListening,
  stopListening,
} from '../state/jarvisStateMachine';

const JarvisContext = createContext(null);

export function JarvisProvider({ children }) {
  const [state, dispatch] = useReducer(jarvisReducer, initialState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (status) => {
      if (status === 'active') {
        try {
          const granted = await checkMicPermission();
          if (!granted) {
            panicOff(dispatch);
          }
        } catch (error) {
          console.error('Error checking mic permission:', error);
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const value = useMemo(
    () => ({
      state,
      dispatch,
      startListening: () => startListening(dispatch),
      stopListening,
      panicOff: () => panicOff(dispatch),
    }),
    [state]
  );

  return <JarvisContext.Provider value={value}>{children}</JarvisContext.Provider>;
}

export function useJarvis() {
  const context = useContext(JarvisContext);
  if (!context) {
    throw new Error('useJarvis must be used within JarvisProvider');
  }
  return context;
}
