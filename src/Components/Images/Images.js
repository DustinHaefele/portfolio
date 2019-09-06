import './Images.css'
import React from 'react';

export default class Images extends React.Component {
  
  state = {
    //imgIdx: 0,
    textVisible: false,
  }

  showText() {
    this.setState({
      textVisible: true
    });
  }
  hideText() {
    this.setState({
      textVisible: false
    });
  }

  updateImg() {
    if (this.props.imgIdx === 0) {
      this.setState({
        imgIdx: 1
      });
    } else {
      this.setState({
        imgIdx: 0
      });
    }
  }
  
  render() {

    const classy1 = this.props.imgIdx === 0 ? "img-div-desk" : "img-div-mobile"
    const classy2 = this.props.imgIdx === 0 ? "project-screenshot-desk" : "project-screenshot-mobile"


    return (
    <div
        className={classy1}
        onMouseEnter={() => this.showText()}
        onMouseLeave={() => this.hideText()}
      >
        <img
          src={
            this.props.projects[this.props.projectId].imgs[
              this.props.imgIdx
            ]
          }
          alt="project screenshot"
          className={classy2}
          onClick={this.props.updateImg}
        />

        {this.state.textVisible && this.props.imgIdx === 0 && (
          <h2 className="text-over desktop">Click to see mobile view</h2>
        )}
        {this.state.textVisible && this.props.imgIdx === 1 && (
          <h2 className="text-over mobile">Click to see desktop view</h2>
        )}
      </div> 
      // : <div
      //   className="img-div-mobile"
      //   onMouseEnter={() => this.showText()}
      //   onMouseLeave={() => this.hideText()}
      // >
      //   <img
      //     src={
      //       this.props.projects[this.props.projectId].imgs[
      //         this.props.imgIdx
      //       ]
      //     }
      //     alt="project screenshot"
      //     className="project-screenshot-mobile"
      //     onClick={this.props.updateImg}
      //   />

      //   {/* {this.props.textVisible && this.props.imgIdx === 0 && (
      //     <h2 className="text-over desktop">Click to see mobile view</h2>
      //   )} */}
      //   {this.state.textVisible && (
      //     <h2 className="text-over mobile">Click to see desktop view</h2>
      //   )}
      // </div>}</>)
    )}
}