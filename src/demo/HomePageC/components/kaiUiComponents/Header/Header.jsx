import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../../kai-ui/src/theme/colors.scss';
import './Header.scss';

const prefixCls = 'kaiHeader';
const Header = React.memo(
  props => {
    const {
      text,
      backgroundColor,
      bottomMargin
    } = props;

    return (
      <header className={prefixCls}>
        <span className='h1style'>{text}</span>
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
