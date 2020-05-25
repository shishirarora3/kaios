import React from 'react';
import "../styles/CalendarHeader.css";
import TabView from "../../kai-ui/src/views/TabView/TabView";

export const CalendarHeader = ({headerText}) =><TabView
tabLabels={[headerText]}
>
</TabView>;
