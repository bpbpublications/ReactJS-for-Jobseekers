import axios from "axios";
import { useState, useEffect } from "react";

export const useGETAPIRequest = (apiURL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(apiURL)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [apiURL]);

  return {
    data,
    isLoading,
    error
  };
};
