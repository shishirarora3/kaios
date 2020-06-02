import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '../../components/Tabs/Tabs';
import TabIcon from '../../components/TabIcon/TabIcon';
import colors from '../../theme/colors.scss';

import './TabIconView.scss';

const prefixCls = 'kai-tab-icon-view';

const TabIconView = React.memo(
  props => {
    const {
      tabIcons,
      onChangeIndex,
      focusColor,
      children
    } = props;

    const [activeT, setActiveT] = useState(0);
    const [isTransitionD, setTransitionD] = useState(true);

    const tabViewT = `${prefixCls}-tabs`;
    const tabViewC = `${prefixCls}-content`;

    const handleChangeIconIndex = tabIndex => {
      // NOTE: Ensure you set state for tab transition first.
      //       Otherwise you will face strange race condition bugs.
      setTransitionD(false);
      console.log("ti"+activeT);
      if(isTransitionD){
        setActiveT(tabIndex);
        console.log("ti"+activeT);
        onChangeIndex(tabIndex);
      }
    };

    const handleIconTransitionEnd = () => setTransitionD(true);

    const renderIconTabs = () => {
      return tabIcons.map((icon, i) => {
        return (
          <TabIcon
            key={`key-${i}`}
            icon={icon}
            focusColor={focusColor}
          />
        );
      });
    };

    const renderIconChildren = () => {
      return React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          isActive: activeT === i && isTransitionD,
        });
      });
    };

    return (
      <div className={prefixCls}>
        <div className={tabViewT}>
          <Tabs onChangeIndex={handleChangeIconIndex}>
            {renderIconTabs()}
          </Tabs>
        </div>

        <div className={tabViewC}>
          <SwipeableViews
            axis={'x'}
            index={activeT}
            onChangeIndex={handleChangeIconIndex}
            onTransitionEnd={handleIconTransitionEnd}
            disabled={true}
          >
            {renderIconChildren()}
          </SwipeableViews>
        </div>
      </div>
    );
  }
);

TabIconView.propTypes = {
  tabIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeIndex: PropTypes.func,
  focusColor: PropTypes.string,
  children: PropTypes.array,
};

TabIconView.defaultProps = {
  onChangeIndex: () => {},
  focusColor: colors.defaultFocusColor,
};

export default TabIconView;
