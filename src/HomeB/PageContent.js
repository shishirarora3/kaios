import React, { useContext } from "react";
import TabIconView from "../kai-ui-new/views/TabIconView/TabIconView";
import TabView from "../kai-ui-new/views/TabView/TabView";
import ListView from "../kai-ui/src/views/ListView/ListView";
import RoundIconListItem from "../kai-ui-new/components/RoundIconListItem/RoundIconListItem";
import { SoftKeyContext } from "../kai-ui/src/components/SoftKey/SoftKeyProvider";
import mailIcon from "../icons/homeb/mailIcon.png";
import newsIcon from "../icons/homeb/newsIcon.png";
import filesIcon from "../icons/homeb/filesIcon.png";
import calendarIcon from "../icons/homeb/calendarIcon.png";
import person1 from "../icons/homeb/person1.png";
import person2 from "../icons/homeb/person2.png";
import person3 from "../icons/homeb/person3.png";
export default function PageContent() {
  const value = useContext(SoftKeyContext);
  value.setSoftKeyTexts({
    leftText: "Exit",
    centerText: "Open",
    rightText: "Options",
  });
  function onChange(p){
        console.log("pg"+p);
  }
  return (
    <TabIconView
      tabIcons={[mailIcon, newsIcon, filesIcon, calendarIcon]}
      focusColor="#0078D4"
    >
     
      <ListView>
        <div className="Tab1">
          <TabView tabLabels={["Email", "SMS"]} focusColor="black"  onChangeIndex={onChange}>
            <ListView isActive>
              <RoundIconListItem
                primary="Sahil Warsi"
                secondary="See this video ww..."
                iconSrc={person1}
                focusColor="#0078D4"
                messages="4"
              />
              <RoundIconListItem
                primary="Amma"
                secondary="VERY NICE PHOTO..."
                iconSrc={person2}
                focusColor="#0078D4"
                messages="10"
              />
              <RoundIconListItem
                primary="Harindar Paint Shop"
                secondary="Payment done. Pls c..."
                iconSrc={person3}
                focusColor="#0078D4"
                messages="1"
              />
            </ListView>

            <ListView>
              <p>SMSes</p>
            </ListView>
          </TabView>
        </div>
      </ListView>
      <ListView>
        <h1>News page</h1>
      </ListView>
      <ListView>
        <h1> Files page</h1>
      </ListView>
      <ListView>
        <h1>Calendar Page</h1>
      </ListView>
    </TabIconView>
  );
}
