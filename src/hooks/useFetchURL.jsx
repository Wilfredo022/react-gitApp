import { useEffect, useState } from "react";
import { fetchURL } from "../helpers/fetchURL";

export const useFetchURL = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchURL(categoria).then((imagen) => {
      setState({
        data: imagen,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
