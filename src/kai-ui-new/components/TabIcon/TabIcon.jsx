import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../theme/colors.scss';

import './TabIcon.scss';

const prefixCls = 'kai-tab-i';

const Tab = React.memo((props) => {
	const { index, icon, onTabChange, isActive, focusColor, forwardedRef } = props;

	const actPrefixCls = `${prefixCls}${isActive ? '-active' : '-inactive'}`;

	const handleClick = () => onTabChange(index);

	return (
		<div
			onClick={handleClick}
			className={actPrefixCls}
			style={{ '--tab-underline-color': focusColor }}
			ref={forwardedRef}
		>
			<div className={`${actPrefixCls}-label`}>
				<img src={icon} alt="Tab-icon" />
			</div>
		</div>
	);
});

Tab.propTypes = {
	index: PropTypes.number,
	label: PropTypes.string,
	onTabChange: PropTypes.func,
	isActive: PropTypes.bool,
	focusColor: PropTypes.string,
	forwardedRef: PropTypes.oneOfType([ PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) }) ])
};

Tab.defaultProps = {
	index: 0,
	label: null,
	onTabChange: () => {},
	isActive: false,
	focusColor: colors.defaultFocusColor
};

export default React.forwardRef((props, ref) => <Tab forwardedRef={ref} {...props} />);
