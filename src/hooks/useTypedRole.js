import { useEffect, useState } from 'react';

const useTypedRole = (roles) => {
  const [typedRole, setTypedRole] = useState('');
  useEffect(() => {
    const nextTypedRole = roles[0].slice(0, typedRole.length + 1);
    if (nextTypedRole === typedRole) return;

    const timeout = setTimeout(() => {
      setTypedRole(roles[0].slice(0, typedRole.length + 1));
    }, 100);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [roles, typedRole]);
  return typedRole;
};

export default useTypedRole;
