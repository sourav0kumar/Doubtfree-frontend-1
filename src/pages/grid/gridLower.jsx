import React from 'react'
import "./css/grid.css";
import { FireOutlined, DollarOutlined, HeartOutlined, TrophyOutlined, 
  RocketOutlined, RedditOutlined, RadarChartOutlined } from "@ant-design/icons";
const GridLower = () => {
  return (
    <div className="container-grid">
      <div className="item-grid gr1 flex items-center justify-center">
        <FireOutlined className="text-3xl md:text-5xl" />
      </div>
      <div className="item-grid gr2 flex items-center justify-center">
        <DollarOutlined className="text-3xl md:text-5xl" />
      </div>
      <div className="item-grid gr3 flex items-center justify-center">
        <HeartOutlined className="text-3xl md:text-5xl" />
      </div>
      <div className="item-grid gr7 flex items-center justify-center">
        <TrophyOutlined className="text-3xl md:text-5xl text-yellow-600" />
      </div>
      <div className="item-grid gr6 flex items-center justify-center">
        <RocketOutlined className="text-3xl md:text-5xl" />
      </div>
      <div className="item-grid gr1 flex items-center justify-center">
        <RedditOutlined className="text-3xl md:text-5xl" />
      </div>
      <div className="item-grid gr2 flex items-center justify-center">
        <RadarChartOutlined className="text-3xl md:text-5xl text-blue-900" />
      </div>
    </div>
  );
};

export default GridLower