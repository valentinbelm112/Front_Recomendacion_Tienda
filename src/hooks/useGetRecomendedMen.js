import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverURL } from "../utils/routing";
const useGetRecomendedMen = (id) => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  
  useEffect(async () => {
    const response = await axios(
      `${serverURL}/api/rating/${id}`,
    );
    console.log(response.data.data);

    setListItemWomem(response.data.data);
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading };
};

export default useGetRecomendedMen;
