import React from "react";
import { Page, List, Icon, Box, Slider, useNavigate } from "zmp-ui";

const DetailProduct = (props) => {
  const navigate = useNavigate();
  return (
    <Page>
      <List>
        <List.Item
          title="title"
          prefix={<Icon icon="zi-add-photo" />}
          suffix={<Icon icon="zi-arrow-right" />}
          brackets="brackets"
          subTitle="subtitle"
          onClick={() => navigate(`/payment/1`)}
        />
        <div>aaaaaa</div>
        <List.Item title="title" brackets="brackets" subTitle="subtitle" />
        <List.Item title="title" brackets="brackets" subTitle="subtitle" />
      </List>
    </Page>
  );
};

export default DetailProduct;
