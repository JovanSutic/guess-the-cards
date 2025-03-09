import { useState, useEffect } from "react";

export const useFetchWord = () => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        const result = await response.json();
        if (result.length) {
          setData(result[0]);
        } else {
          throw new Error("No word found");
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, []);

  return { data, loading, error };
};
