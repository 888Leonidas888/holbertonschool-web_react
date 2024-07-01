import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    marginLeft: '75px',
    '@media (max-width: 900px)': {
      marginLeft: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

class BodySection extends Component {
  render() {
    const { title, children = null } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;
