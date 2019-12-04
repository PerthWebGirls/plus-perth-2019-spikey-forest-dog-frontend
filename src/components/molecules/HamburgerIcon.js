import React from 'react';
import Button from '../atoms/Button'
import Span from '../atoms/Span'

const Header = ({title, label, ...props}) => {
  return (
        <Button className="header">
           <Span/>
        </Button>
    );
}

export default Header;