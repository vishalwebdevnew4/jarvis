import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { checkMicPermission } from '../services/permissionService';

const PermissionContext = createContext(null);

export function PermissionProvider({ children }) {
  const [micGranted, setMicGranted] = useState(false);

  useEffect(() => {
    checkMicPermission().then(setMicGranted);
  }, []);

  const value = useMemo(() => ({ micGranted, setMicGranted }), [micGranted]);

  return <PermissionContext.Provider value={value}>{children}</PermissionContext.Provider>;
}

export function usePermissions() {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error('usePermissions must be used within PermissionProvider');
  }
  return context;
}
