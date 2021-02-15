import React from 'react';
import PropTypes from 'prop-types';
import { requireOneOf } from '../../../../../kai-ui/src/utils';
import { useFocus } from '../../../../../kai-ui/src/hooks';
import '../../colors_and_themes/theme_colors.scss'

import './IconListItem.scss';

const IconListItem = React.memo(
  props => {
    const {
      primary,
      secondary,
      icon,
      iconSrc,
      focusColor,
      forwardedRef,
      index,
      onFocusChange,
      theme,
      type
    } = props;

    const handleFocusChange = isNowFocused => {
      if (isNowFocused) {
        onFocusChange(index);
      }
    }

    const isFocused = useFocus(forwardedRef, handleFocusChange, false);

    const prefixCls = 'kai-ilD';

    var textFocusColor="default";
    switch(focusColor){
      case "#323232":
        textFocusColor="white";
        break;
      case "#0078D4":
        textFocusColor="white";
        break;
      case "#DEECF9":
        textFocusColor="black";
        break;
    }

    const focusCls=`${textFocusColor}`;
    const themeCls=`${prefixCls}-theme-${theme}-${isFocused?'focused':'unfocused'}-${focusCls}`;
    const itemCls = prefixCls;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const lineCls = `${prefixCls}-line`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const typeCls=`kai-ilD-type-${type}`

    const renderedIcon = iconSrc === null ?
        <span className={icon} /> :
        <img src={iconSrc} alt="" />;

    return (
      <div
        tabIndex="0"
        className={`${itemCls} ${themeCls} ${typeCls}`}
        ref={forwardedRef}
        style={{ backgroundColor: isFocused && focusColor}}
      >
        <div className={`${iconCls}`}>
          {renderedIcon}
        </div>
        <div className={`${lineCls}`}>
          <span className={`${primaryCls} ${typeCls}`}>{primary}</span>
          <label className={`${secondaryCls}`}>{secondary}</label>
        </div>
      </div>
    );
  }
);

const requireOneIcon = requireOneOf({
  icon: PropTypes.string,
  iconSrc: PropTypes.string
});

IconListItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  // icon: requireOneIcon,
  // iconSrc: requireOneIcon,
  focusColor: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  index: PropTypes.number,
  onFocusChange: PropTypes.func,
  theme:PropTypes.string,
  type: PropTypes.string
};

IconListItem.defaultProps = {
  secondary: null,
  icon: null,
  iconSrc: null,
  focusColor: "default",
  theme:"white",
  type: "default"
};

export default React.forwardRef((props, ref) => (
  <IconListItem forwardedRef={ref} {...props} />
));
