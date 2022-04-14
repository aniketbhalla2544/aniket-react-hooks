import { useCallback, useState } from 'react';

const useToggle = (initialValue) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const handleToggle = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  return [isVisible, handleToggle];
};

export default useToggle;
