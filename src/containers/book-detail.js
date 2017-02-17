import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h5>Details for:</h5>
        <h5>Title: {this.props.book.title}</h5>
        <h5>Pages: {this.props.book.pages}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };

}

export default connect(mapStateToProps)(BookDetail);
