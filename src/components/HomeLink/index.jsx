import React from 'react';
import {Link} from "react-router-dom";

import './HomeLink.css'

import arrow from "../../icons/arrow.png";

export const HomeLink = () => (
 <Link to="/" className="homeLink">
  <div className="homeLink__img"><img src={arrow} alt=""/></div>
 </Link>
)

