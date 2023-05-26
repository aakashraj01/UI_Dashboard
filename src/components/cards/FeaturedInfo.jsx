import "./featuredInfo.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiUsers, FiThumbsUp } from "react-icons/fi";
import { BsTags } from "react-icons/bs";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredIcon">
          <RiMoneyDollarCircleLine />
        </span>
        <span className="featuredTitle">Total Revenues</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,129,415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <BsTags />
        </span>
        <span className="featuredTitle">Total Transaction</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$415,878</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <FiThumbsUp />
        </span>
        <span className="featuredTitle">Total Likes </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$98,789</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <FiUsers />
        </span>
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$989,819</span>
        </div>
      </div>
    </div>
  );
}
