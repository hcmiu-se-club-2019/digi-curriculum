import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

import { SortOrder } from './SortOptions.enum';

import { ReactComponent as AscendingHorizontalIcon } from '../../icons/ascending-horizontal.svg';
import { ReactComponent as DescendingHorizontalIcon } from '../../icons/descending-horizontal.svg';
import { ReactComponent as AscendingVerticalIcon } from '../../icons/ascending-vertical.svg';
import { ReactComponent as DescendingVerticalIcon } from '../../icons/descending-vertical.svg';

class CourseHeaderItemAll extends Component {
  changeSortMode(headerOptions) {
    this.props.onChangeSortMode(headerOptions);
  }

  render() {
    console.log(this.props)
    return (
      <div
        style={{
          width: '20px',
          height: '170px',
          display: 'flex',
          flexDirection: 'column',
          margin: '1px 0px 1px 5px',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: '180px',
            height: '20px',
            transform: 'rotate(-60deg) translate(42px, -69px)',
            fontSize: '10px',
            color: this.props.isSelected ? '#CC0000' : 'grey',
            fontWeight: this.props.isSelected ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          Course
        </div>
        <Checkbox defaultChecked={this.props.isSelected} style={{ color: '#007FFF', margin: '0px', padding: '0px' }} size="small" />
        <div
          style={{
            width: '20px',
            height: '20px',
            color: this.props.color ?? 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1px 0px',
            cursor: 'pointer',
          }}
          onClick={() =>
            this.props.onSortAverageScore(
              this.props.sortAverageScoreOrder === SortOrder.ASC || !this.props.sortAverageScoreOrder ? SortOrder.DESC : SortOrder.ASC
            )
          }
        >
          {this.props.sortAverageScoreOrder === SortOrder.ASC ? (
            <AscendingHorizontalIcon />
          ) : this.props.sortAverageScoreOrder === SortOrder.DESC ? (
            <DescendingHorizontalIcon />
          ) : (
            <svg width="20px" height="20px" fill="#CCCCCC">
              <circle r={3} cx={10} cy={10} />
            </svg>
          )}
        </div>
        <div
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px -5px 0px',
            cursor: 'pointer',
          }}
          onClick={() => this.props.onSortGPA(this.props.sortGPAOrder === SortOrder.ASC || !this.props.sortGPAOrder ? SortOrder.DESC : SortOrder.ASC)}
        >
          {this.props.sortGPAOrder === SortOrder.ASC ? (
            <AscendingVerticalIcon />
          ) : this.props.sortGPAOrder === SortOrder.DESC ? (
            <DescendingVerticalIcon />
          ) : (
            <svg width="20px" height="20px" fill="#CCCCCC">
              <circle r={3} cx={10} cy={10} />
            </svg>
          )}
        </div>
      </div>
    );
  }
}

CourseHeaderItemAll.propTypes = {
  isSelected: PropTypes.bool,
  selectedHeader: PropTypes.string,
  sortOrder: PropTypes.string,
  onChangeSortMode: PropTypes.func,
};

export default CourseHeaderItemAll;
