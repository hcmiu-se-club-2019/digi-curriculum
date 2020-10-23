import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

import { SortOrder } from './SortOptions.enum';

import { ReactComponent as AscendingVerticalIcon } from '../../icons/ascending-vertical.svg';
import { ReactComponent as DescendingVerticalIcon } from '../../icons/descending-vertical.svg';

class CourseHeaderItem extends Component {
  changeSortMode(headerOptions, id) {
    this.props.onChangeSortMode(headerOptions, id);
  }
  render() {
    const { id, index, name, averageScore, color, backgroundColor, isSelected, selectedSortId, sortScoreOrder } = this.props;

    return (
      <div
        style={{
          width: '20px',
          height: '170px',
          display: 'flex',
          flexDirection: 'column',
          margin: `1px ${index % 5 === 0 ? 5 : 1}px 1px ${index % 5 === 1 ? 5 : 1}px`,
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: '180px',
            height: '20px',
            transform: 'rotate(-60deg) translate(42px, -69px)',
            fontSize: '10px',
            color: isSelected ? 'black' : 'grey',
            fontWeight: isSelected ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {name.length <= 30 ? name : `${name.substring(0, 30)}...`}
        </div>
        <Checkbox
          disabled={!averageScore}
          defaultChecked={isSelected}
          style={{ color: !!averageScore ? '#007FFF' : '#BDBDBD', margin: '0px', padding: '0px' }}
          size="small"
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: backgroundColor,
            color: color ?? 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1px 0px',
          }}
        >
          {!isNaN(averageScore) ? averageScore : ''}
        </div>
        <div
          style={{
            width: '20px',
            height: '20px',
            color: color ?? 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px -5px 0px',
            cursor: isNaN(averageScore) ? 'auto' : 'pointer',
          }}
          onClick={() => {
            if (isNaN(averageScore)) return;
            this.props.onSortScore(id, sortScoreOrder === SortOrder.ASC || !sortScoreOrder ? SortOrder.DESC : SortOrder.ASC);
          }}
        >
          {selectedSortId !== null && sortScoreOrder === SortOrder.ASC ? (
            <AscendingVerticalIcon />
          ) : selectedSortId !== null && sortScoreOrder === SortOrder.DESC ? (
            <DescendingVerticalIcon />
          ) : !isNaN(averageScore) ? (
            <svg width="20px" height="20px" fill="#CCCCCC">
              <circle r={3} cx={10} cy={10} />
            </svg>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

CourseHeaderItem.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  averageScore: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedSortId: PropTypes.string,
  sortScoreOrder: PropTypes.string,
  onSortScore: PropTypes.func,
};

export default CourseHeaderItem;
