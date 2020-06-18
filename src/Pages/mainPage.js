import React from "react";
import SvgIconsSize from "../Components/icon";
import CustomizedInputBase from "../Components/search";
import BasicButtonGroup from "../Components/tRButtons";
import CarouseBanner from "../Components/carousel";
import FilterButton from "../Components/filterButton";
import LeftSideButton from "../Components/leftSidebutton";
import Cards from "../Components/cards";
export default function Main() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* row 1 */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SvgIconsSize></SvgIconsSize>
        <CustomizedInputBase></CustomizedInputBase>
        <BasicButtonGroup></BasicButtonGroup>
      </div>
      {/* row 2 carousel */}
      <div>
        <CarouseBanner></CarouseBanner>
      </div>
      {/* row 3 left side buttons, cards, filters */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <LeftSideButton></LeftSideButton>
        </div>
        <div style={{ display: "flex" , justifyContent: "center"}}>
            <Cards></Cards>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FilterButton></FilterButton>
        </div>
      </div>
    </div>
  );
}
