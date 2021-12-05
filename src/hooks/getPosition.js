import { useEffect, useState } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = position => {
    const {
      coords: { latitude, longitude },
    } = position;
    setPosition({ latitude, longitude });
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    const watcher = geo.getCurrentPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};

export default usePosition;
