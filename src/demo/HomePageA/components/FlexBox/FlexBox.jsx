import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './FlexBox.scss';

const prefixCls = 'flexboxA';

const FlexBox = React.memo(
  props => {
    const itemRefs = [];

    const [activeItem, setActiveItem] = useState(0);

    const {
      children,
      onChangeIndex,
      isActive,
	  shouldBeHidden,
	  numColumns,
    } = props;

    const handleChangeIndex = itemIndex => {
      setActiveItem(itemIndex);
      onChangeIndex(itemIndex);
    };

    const setFocusToIndex = useCallback(
      index => ReactDOM.findDOMNode(itemRefs[index].current).focus(),
      [itemRefs]
    );

    const handleKeyDown = useCallback(
      e => {
        let index = activeItem;
        console.log(`Active Item was ${activeItem}`);
        if (!isActive) {
          return;
        }

        switch (e.key) {
          case 'ArrowLeft':
            index = index - 1 >= 0 ? index - 1 : itemRefs.length - 1;
            setFocusToIndex(index);
            break;
          case 'ArrowRight':
            index = index + 1 < itemRefs.length ? index + 1 : 0;
            setFocusToIndex(index);
            break;
          case 'ArrowUp':
            index = index-numColumns >=0 ? index - numColumns : index + 2*numColumns;
            setFocusToIndex(index);
            break;
          case 'ArrowDown':
            index = index+numColumns < itemRefs.length ? index + numColumns : index - 2*numColumns;
            setFocusToIndex(index);
            break; 
          default:
            break;
        }
      },
      [isActive, activeItem, setFocusToIndex, itemRefs]
    );

    useEffect(
      () => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      },
      [handleKeyDown]
    );

    useEffect(
      () => {
        if(isActive) {
          setFocusToIndex(activeItem)
        }
      },
      [isActive, setFocusToIndex, activeItem]
    );

    const renderChildren = () => {
      let index = -1;
      return React.Children.map(children, child => {
        // Don't focus on separators
        if (child.props.separatorText != null) {
          return child;
        }
        if(child.props.shouldBeHidden === true){
		  return child;
        }
        index++;
        const newRef = React.createRef();
        itemRefs[index] = newRef;
        return React.cloneElement(child, {
          index,
          onFocusChange: handleChangeIndex,
          ref: newRef,
        });
      });
    };

    return <div className={prefixCls}>{renderChildren()}</div>;
  }
);

FlexBox.propTypes = {
  children: PropTypes.array.isRequired,
  onChangeIndex: PropTypes.func,
  shouldBeHidden: PropTypes.bool,
  // Refocus on tab change
  isActive: PropTypes.bool,
};

FlexBox.defaultProps = {
  onChangeIndex: () => {},
  isActive: true,
  shouldBeHidden: false,
  numColumns: 3,
};

export default FlexBox;
