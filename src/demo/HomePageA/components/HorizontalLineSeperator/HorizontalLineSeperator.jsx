import React from 'react';
import './HorizontalLineSeperator.scss';

const prefixCls = 'seperatorLine'
const HorLineSeperator = React.memo(
  props => {
    const {
      text,
      topOrBottom,
    } = props;

    return (
        <hr className={`${prefixCls}-`+`${topOrBottom}`}></hr>
    );
  }
);

export default HorLineSeperator;
