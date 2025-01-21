/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavlink = (props) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${props.className} ${isActive ? "invisible ml-4" : "navlink"}`
      }
    />
  );
}

export default StyledNavlink;
