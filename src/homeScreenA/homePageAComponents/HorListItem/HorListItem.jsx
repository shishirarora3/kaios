import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../homePageA/HomePageATheme/colors.scss';
import { useFocus } from '../../homePageAHooks';
import {requireOneOf} from '../../homePageAUtils';
import './HorListItem.scss';

const prefixCls = 'kai-tl';

const HorListItem = React.memo(
  props => {
    const {
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

	const assignStyleForDiv = () => {
		return (
			isFocused ?	{backgroundColor: focusColor, borderColor: focusBorderColor}:
			 {backgroundColor: nonFocusColor, borderColor: nonFocusColor}
		)
	}

    return (
      <div
        tabIndex="0"
        className={itemCls}
        style={assignStyleForDiv()}
		ref={forwardedRef}
      >
        <img src={props.iconSrc} alt="alter"></img>
      </div>
    );
  }
);
const requireOneIcon = requireOneOf({
	icon: PropTypes.string,
	iconSrc: PropTypes.string
  });

HorListItem.propTypes = {
  iconSrc: requireOneIcon.isRequired,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string,
  focusColor: PropTypes.string,
  nonFocusColor: PropTypes.string,
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
