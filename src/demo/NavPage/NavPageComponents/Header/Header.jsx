import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../kai-ui/src/theme/colors.scss';
import './Header.scss';

const prefixCls = 'kai-header-navpage';
const Header = React.memo(
  props => {
    const {
      text,
      backgroundColor
    } = props;

    return (
      <header className={prefixCls} style={{ background: backgroundColor }}>
        <h1 className="h1">{text}</h1>
      </header>
    );
  }
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: colors.headerPurple,
};

export default Header;
