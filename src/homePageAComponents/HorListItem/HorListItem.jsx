import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../homePageA/HomePageATheme/colors.scss';
import { useFocus } from '../../homePageAHooks';

import './HorListItem.scss';

const prefixCls = 'kai-tl';

const HorListItem = React.memo(
  props => {
    const {
      primary,
      secondary,
      tertiary,
      focusColor,
      nonFocusColor,
      focusBorderColor,
      forwardedRef,
      index,
      onFocusChange,
      iconSrc
    } = props;

    const handleFocusChange = isNowFocused => {
      if (isNowFocused) {
        onFocusChange(index);
      }
    }

    const isFocused = useFocus(forwardedRef, handleFocusChange, false);

    const itemCls = prefixCls;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const tertiaryCls = `${prefixCls}-tertiary ${tertiary ? '' : 'hidden'}`;
    // console.log(`focus color is ${focusColor}`);
    return (
      <div
        tabIndex="0"
        className={itemCls}
        style={{ backgroundColor: isFocused ? focusColor : nonFocusColor, borderRadius: '6px', border: isFocused ? `2px solid ${focusBorderColor}` : `2px solid ${nonFocusColor}`, borderSizing: 'border-box'}}
        ref={forwardedRef}
      >
        {/* {primary} */}
        <img src={props.iconSrc} alt="alter"></img>
        {/* <spaa
        n className={primaryCls}>{primary}</span> */}
        {/* <label className={secondaryCls}>{secondary}</label>
        <label className={tertiaryCls}>{tertiary}</label> */}
      </div>
    );
  }
);

HorListItem.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string,
  // focusColor: PropTypes.string,
  // nonFocusColor: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  index: PropTypes.number,
  onFocusChange: PropTypes.func,
};

HorListItem.defaultProps = {
  primary: 'def_primary',
  secondary: null,
  tertiary: null,
  focusColor: colors.defaultHomeAFocusColor,
  nonFocusColor: colors.defaultHomeANonFocusColor,
  focusBorderColor: colors.defaultHomeABorderFocusColor,
};

export default React.forwardRef((props, ref) => (
  <HorListItem forwardedRef={ref} {...props} />
));
