import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class CourseTile extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          width: "102px",
          height: "82px",
          marginBottom: "20px"
        }}
      >
        {this.props.courseId ? (
          <div>
            <div
              className="justify-content-center"
              style={{
                height: "60px",
                fontSize: "11px",
                fontWeight: "bold",
                lineHeight: "1em",
                display: "flex",
                alignItems: "center"
              }}
            >
              {this.props.name.length <= 50
                ? this.props.name
                : this.props.name.substring(0, 50) + "..."}
            </div>
            <div
              style={{
                height: "20px",
                fontSize: "14px"
              }}
            >
              {this.props.courseId}
            </div>
          </div>
        ) : (
          <div
            className="justify-content-center"
            style={{
              height: "80px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center"
            }}
          >
            Elective
          </div>
        )}
      </div>
    );
  }
}

export default CourseTile;
