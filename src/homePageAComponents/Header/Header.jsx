import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../homePageA/HomePageATheme/colors.scss';
import HorLineSeperator from '../HorLineSeperator/HorLineSeperator';

import './Header.scss';

const prefixCls = 'kai-header';
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
          <HorLineSeperator topOrBottom={topOrBottom}></HorLineSeperator>
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
