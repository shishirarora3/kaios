import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import '../../colors_and_themes/theme_colors.scss'

const Header = React.memo(
  props => {
    const {
      text,
      theme,
      type
    } = props;

    const prefixCls = 'kai-headerD';
    const themeCls=`kai-${theme}`;
    const typeCls=`kai-header-${type}`
    return (
      <header className={`${prefixCls} ${themeCls}`}>
        <h1 className={typeCls}>{text}</h1>
      </header>
    );
  }
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
  type: PropTypes.string
};

Header.defaultProps = {
  theme: "white",
  type: "default"
};

export default Header;
