import React, { useEffect, useState } from "react";
import "./DetailProduct.scss";
import { Page, List, Icon, Box, Slider, useNavigate } from "zmp-ui";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../stores/productStore";
import { useListCateStore } from "../../stores/listCateStore";
import { useCategoryStore } from "../../stores/categoryStore";

const DetailProduct = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const productStore = useProductStore();
  const listCateStore = useListCateStore();
  const categoryStore = useCategoryStore();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    category: "",
    product: "",
    listCate: "",
  });

  // useEffect(() => {
  //   productStore.getProducts();
  // }, [])
  console.log(
    "params",
    productStore.productData,
    listCateStore.listCateData,
    categoryStore.categoryData
  );
  useEffect(() => {
    if (params?.id) {
      const productR = productStore.productData;
      const productFound = productR.filter((item) => item.id === params.id);
      if (productFound.length) {
        const listCateFound = listCateStore.listCateData.filter(
          (item) => item.id === productFound[0]?.listCateId || ""
        );
        const cateFound = categoryStore.categoryData.filter(
          (item) => item.id === productFound[0]?.cateId || ""
        );
        setData({
          category: cateFound,
          product: productFound,
          listCate: listCateFound,
        });
        console.log("productFound", productFound, listCateFound, cateFound);
      }
    }
  }, [params?.id]);

  return (
    <Page>
      <List>
        <List.Item
          title="title"
          suffix={<Icon icon="zi-arrow-right" />}
          brackets="brackets"
          subTitle="subtitle"
          className="accordion"
          onClick={() => setIsActive(!isActive)}
        />
        <div className={`panel ${isActive ? "unactive" : "active"}`}>
          <p>{data && data?.listCate}</p>
        </div>
        <List.Item title="title" brackets="brackets" subTitle="subtitle" />
        <List.Item title="title" brackets="brackets" subTitle="subtitle" />
      </List>
    </Page>
  );
};

export default DetailProduct;
