import React from 'react';
import Button from '../atoms/Button'
import Span from '../atoms/Span'

const HamburgerIcon = ({title, label, ...props}) => {
  return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <Span />
        </button>
    );
}

export default HamburgerIcon;