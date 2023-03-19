import React from "react";
import { useNavigate } from "zmp-ui";
import titleImgOne from "../../images/web-icon.png";
import "./TypeDetail.scss";

const TypeDetail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="type-detail">
      <div className="type_title">Bao hiem kinh doanh</div>
      <div className="type_list">
        <div className="type_list-item">
          <img src={titleImgOne} />
          <span>abcabc</span>
        </div>
        <div className="type_list-item">
          <img src={titleImgOne} />
          <span>abcabc</span>
        </div>
        <div className="type_list-item">
          <img src={titleImgOne} onClick={() => navigate(`/detail/1`)} />
          <span>abcabc</span>
        </div>
      </div>
    </div>
  );
};

export default TypeDetail;
