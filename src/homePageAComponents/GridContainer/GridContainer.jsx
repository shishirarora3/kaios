import React from 'react';
import './GridContainer.scss';

const prefixCls = 'gridContainerType'
const GridContainer = React.memo(
  props => {
    const {
      children
    } = props;

    return (
    <div className={prefixCls}>
        {children}
    </div>
    );
  }
);

export default GridContainer;
