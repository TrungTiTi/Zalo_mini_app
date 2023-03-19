import React from "react";
import { useParams } from "react-router-dom";
import TypeDetail from "../../components/TypeDetail/TypeDetail";

const ListType = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <div>
      <TypeDetail />
    </div>
  );
};

export default ListType;
