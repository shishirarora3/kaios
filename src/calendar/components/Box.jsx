import React from 'react';
import {Calendar} from "./Calendar";
import TabView from "../../kai-ui/src/views/TabView/TabView";

export const
    Box = (props) => <>
        <TabView tabLabels={[props.headerText, "Drive"]}>
            <Calendar {...props}/>
        </TabView>
    </>;

