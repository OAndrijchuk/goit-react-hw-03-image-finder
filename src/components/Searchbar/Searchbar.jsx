import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    textSQ: '',
  };

  hendleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.textSQ);
  };
  hendleInputCheange = ({ target }) => {
    this.setState({ textSQ: target.value });
  };
  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form">
          <SearchBtn
            type="submit"
            className="button"
            onClick={this.hendleFormSubmit}
          >
            Search
          </SearchBtn>

          <SearchInput
            className="input"
            type="text"
            placeholder="Search images and photos"
            name="textSQ"
            onChange={this.hendleInputCheange}
            value={this.state.textSQ}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
