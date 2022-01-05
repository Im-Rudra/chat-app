import React from 'react';
import { textShorter } from '../../libs/helperFuncs';
import './SearchPerson.css';

const SearchPerson = ({ name, email, photoURL }) => {
  return (
    <div className="search-person">
      <div className="person-avater">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gjsyd6b7Jiy-9u6jMZzH_Xt_NV-GJcqy_M_j8P1=s96-c"
          alt=""
          style={{ width: '100%', borderRadius: '50%' }}
        />
      </div>
      <div className="person-info">
        <p className="person-name">{textShorter('Mahmudul Islam Rudra', 20)}</p>
        <p className="person-email">
          {textShorter('mahmudulislam.5995@gmail.com', 17)}
        </p>
      </div>
    </div>
  );
};

export default SearchPerson;
