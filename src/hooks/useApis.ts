import { useEffect, useState } from "react";

export const useApis = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.status === 200) {
        const dataResponse = await response.json();
        setData(dataResponse);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, setData, loading };
};
