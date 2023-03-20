import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypeDetail from "../../components/TypeDetail/TypeDetail";
import { useListCateStore } from "../../stores/listCateStore";
import { useProductStore } from "../../stores/productStore";

const ListType = () => {
  const params = useParams();
  const listCateStore = useListCateStore();
  const [childCateArr, setChildCateArr] = useState<any[]>([]);

  useEffect(() => {
    listCateStore.getListCates();
    if (params?.id && listCateStore.listCateData) {
      const listChildCate = listCateStore.listCateData.filter(
        (item) => item.cateId === params.id
      );
      setChildCateArr(listChildCate);
    }
  }, [params?.id]);
  console.log("params", childCateArr);
  return (
    <div>
      {childCateArr.length &&
        childCateArr.map((item) => {
          return <TypeDetail listCateId={item?.id} />;
        })}
    </div>
  );
};

export default observer(ListType);
