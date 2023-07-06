import React, { useState } from 'react';
import {
  SearchbarStyle,
  SearFormStyle,
  SearchFormButtonStyle,
  SearchFormInputStyle,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export const Searchbar = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  };
  const resetSearchInput = () => {
    setSearchQuery('');
  };

  return (
    <SearchbarStyle>
      <SearFormStyle
        onSubmit={event => {
          event.preventDefault();
          onSearchSubmit(searchQuery);
          resetSearchInput();
        }}
      >
        <SearchFormInputStyle
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchQuery}
          value={searchQuery}
        />
        <SearchFormButtonStyle type="submit">
          <IconContext.Provider value={{ size: '24px' }}>
            <FcSearch />
          </IconContext.Provider>
        </SearchFormButtonStyle>
      </SearFormStyle>
    </SearchbarStyle>
  );
};
