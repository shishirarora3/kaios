import React from 'react';
import './HorLineSeperator.scss';

const HorLineSeperator = React.memo(
  props => {
    const {
      text,
      topOrBottom,
    } = props;

    return (
        <hr className={topOrBottom}></hr>
    );
  }
);

export default HorLineSeperator;
