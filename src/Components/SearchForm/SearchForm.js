import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";

import "./SearchForm.scss";

function SearchForm({ params, onParamChange }) {
  return (
    <div className="header__inputContainer">
      <InputGroup className="header__input mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <BsSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={onParamChange}
          value={params.description}
          name="description"
          type="text"
          className="header__inputSearch"
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button className="header__btn" type="submit">
        <VscSettings className="header__btnIcon" />
      </Button>
    </div>
  );
}

export default SearchForm;
