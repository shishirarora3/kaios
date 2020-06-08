import * as React from "react";
import variables from "../variables.scss";

interface IProps {
    name?: string;
}
console.log(variables.theme);
export const News: React.FC<IProps> =
    (props: IProps) => <div style={{
        color: variables.theme,
        height: variables.headerHeight,
    }}>{props.name}</div>;


News.defaultProps = {
    name: "News"
}