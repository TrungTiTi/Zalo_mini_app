import React, { useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import "./index.scss";
import { useRecoilValue } from "recoil";
import { userInfo } from "zmp-sdk";
import { userState } from "../../state";
import titleImgOne from "../../images/web-icon.png";
import UserCard from "../../components/user-card";
import { observer } from "mobx-react-lite";
import { useCategoryStore } from "../../stores/categoryStore";
import { useLocation } from "react-router-dom";

const HomePage: React.FunctionComponent = observer(() => {
  const user = useRecoilValue<userInfo>(userState);
  const navigate = useNavigate();
  const categoryStore = useCategoryStore();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/") {
      console.log("123", location);
    }
  }, []);

  useEffect(() => {
    categoryStore.getCates();
  }, []);

  console.log("123", categoryStore);

  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div className="section-container">
        <List>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/about")}>About</div>
          </List.Item>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/user")}>User</div>
          </List.Item>
        </List>
        <div className={"slide-title-img"}>
          <img className="title-img" src={titleImgOne} />
          <img className="title-img" src={titleImgOne} />
          <img className="title-img" src={titleImgOne} />
          <img className="title-img" src={titleImgOne} />
        </div>
      </div>
      <div className="text-title">
        <p>Bảo hiểm Việt: Chăm sóc tận tâm, Hỗ trợ 24/7</p>
      </div>
      <div className="home-content">
        {categoryStore?.categoryData &&
          categoryStore.categoryData.map((item: any) => {
            console.log("item", item);
            return (
              <div className="home-content-item">
                <img
                  src={item?.image}
                  onClick={() => navigate(`/type/${item.title}`)}
                />
                <p>{item?.name}</p>
              </div>
            );
          })}
      </div>
    </Page>
  );
});

export default HomePage;
