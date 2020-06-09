import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import '../../colors_and_themes/theme_colors.scss'

const Header = React.memo(
  props => {
    const {
      text,
      theme
    } = props;

    const prefixCls = 'kai-headerD';
    const themeCls=`kai-${theme}`;

    return (
      <header className={`${prefixCls} ${themeCls}`}>
        <h1 className="h1">{text}</h1>
      </header>
    );
  }
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string
};

Header.defaultProps = {
  theme: "white"
};

export default Header;
