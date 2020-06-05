import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../HomePageATheme/colors.scss';
import { useFocus } from '../../../../kai-ui/src/hooks';
import './HorizontalListItem.scss';

const prefixCls = 'HorListItemA';

const HorizontalListItem = React.memo(
  props => {
    const {
      focusColor,
      nonFocusColor,
	  focusBorderColor,
	  nonFocusBorderColor,
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

	const assignBackgroundColor = () => isFocused ? focusColor : nonFocusColor;
	const assignBorderColor = () => isFocused ? focusBorderColor : nonFocusBorderColor;
	
	const assignStyleForDiv = () => {
		return(
			{
				backgroundColor: assignBackgroundColor(),
				borderColor: assignBorderColor()
			}
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

  HorizontalListItem.propTypes = {
  iconSrc: PropTypes.string.isRequired, 
  primary: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string,
  focusColor: PropTypes.string,
  nonFocusColor: PropTypes.string,
  nonFocusBorderColor: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  index: PropTypes.number,
  onFocusChange: PropTypes.func,
};

HorizontalListItem.defaultProps = {
  primary: null,
  secondary: null,
  tertiary: null,
  focusColor: colors.defaultHomeAFocusColor,
  nonFocusColor: colors.defaultHomeANonFocusColor,
  focusBorderColor: colors.defaultHomeABorderFocusColor,
  nonFocusBorderColor: colors.defaultHomeANonFocusColor,
};

export default React.forwardRef((props, ref) => (
  <HorizontalListItem forwardedRef={ref} {...props} />
));
