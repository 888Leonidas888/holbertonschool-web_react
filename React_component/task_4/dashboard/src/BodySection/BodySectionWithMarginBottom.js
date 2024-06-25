import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    // const { title, children = null } = this.props;
    return (
      <div className="bodySectionWithMargin">
        {/* <BodySection title={title} {...this.props}> */}
        {/* <BodySection {...this.props}/>{children}</BodySection> */}
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
