"use strict";

var React = require('react');

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    authors: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    selectedIndex: React.PropTypes.string
  },
  render: function () {
    var wrapperClass = 'form-group';
    var authorSelector = function (author)
    {
      var selectOption = <option value={author.id}>{author.firstName} {author.lastName}</option>
      if (this.props.selectedIndex === author.id)
      {
         selectOption = <option value={author.id} selected>{author.firstName} {author.lastName}</option>
      }
      return(  selectOption  );
    };

    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
    
    var authorsOptions = (
     <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
               
           <select id={this.props.name} className="form-control" onChange={this.props.onChange} selectedIndex="2">
               {this.props.authors.map(authorSelector, this)}
           </select>

          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
    
     
    return authorsOptions;
  }
});

module.exports = Input;