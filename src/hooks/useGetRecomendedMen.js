import React, { useState, useEffect } from "react";
import axios from "axios";
const useGetRecomendedMen = (id) => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  
  useEffect(async () => {
    const response = await axios(
      //`https://back-tienda-electronica.herokuapp.com/api/rating/${id}`
      `http://localhost:3001/api/rating/${id}`,
    );
    console.log(response.data.data);

    setListItemWomem(response.data.data);
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading };
};

export default useGetRecomendedMen;
