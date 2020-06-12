import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../theme/colors.scss';
import './Header.scss';

const prefixCls = 'kai-header';
const Header = React.memo(
  props => {
    const {
      text,
      backgroundColor,
      fontColor,      
    } = props;

    //sets styling for header
    const styleHeader={
      backgroundColor:backgroundColor,
    }  
    // sets styling for text
    const styleText={
      color:fontColor
    }
    return (
      <header className={prefixCls} style={styleHeader}>
        <h1 className="h1" style={styleText}>{text}</h1>
      </header>
    );
  }
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: "#FFFFFF",
  text:"Outlook",
  fontColor:"#000000"
};

export default Header;
