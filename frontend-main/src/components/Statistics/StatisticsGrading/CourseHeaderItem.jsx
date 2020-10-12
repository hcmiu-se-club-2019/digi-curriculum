import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CourseHeaderItem extends Component {
  render() {
    return (
      <div style={{ width: '20px', margin: `1px ${(this.props.index) % 5 === 0 ? 5 : 1}px 1px ${(this.props.index) % 5 === 1 ? 5 : 1}px`, }}>
        <div
          style={{
            width: '180px',
            height: '20px',
            transform: 'rotate(-60deg) translate(42px, -69px)',
            fontSize: '10px',
            color: this.props.isSelected ? (this.props.header ? '#CC0000' : 'black') : 'grey',
            fontWeight: this.props.isSelected ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {this.props.name.length <= 31 ? this.props.name : `${this.props.name.substring(0, 31)}...`}
        </div>
        <Checkbox defaultChecked={this.props.isSelected} style={{ color: '#007FFF', margin: '0px', padding: '0px' }} size="small" />
        <svg width="20px" height="20px">
          <circle r={5} cx={10} cy={10} />
        </svg>
      </div>
    );
  }
}

export default CourseHeaderItem;
