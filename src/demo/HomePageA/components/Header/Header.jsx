import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../HomePageATheme/colors.scss';
import HorizontalLineSeperator from '../../components/HorizontalLineSeperator/HorizontalLineSeperator';

import './Header.scss';

const prefixCls = 'headerA';
const Header = React.memo(
  props => {
    const {
      text,
      backgroundColor,
      topOrBottom,
    } = props;

    return (
        <div className={prefixCls}>
          <span>{text}</span>
          <HorizontalLineSeperator topOrBottom={topOrBottom}></HorizontalLineSeperator>
        </div>
    );
  }
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: colors.defaultHomeABackgroundColor,
};

export default Header;
