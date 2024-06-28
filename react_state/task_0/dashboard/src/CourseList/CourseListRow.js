import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  thead: {
    textAlign: 'center',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    padding: '12px 15px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    padding: '12px 15px',
  },
});

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };
  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr style={rowStyle}>
          <th colSpan={2} className={css(styles.th)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr style={rowStyle}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
