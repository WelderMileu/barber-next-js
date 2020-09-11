import React from 'react';

import {
  InputGroup,
  InputPrepend,
  InputContent
} from './style';

interface Props {
  icon: any;
  type: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ icon, type, name, placeholder }) => {
  return (
    <InputGroup>
      <InputPrepend>
        {icon}
      </InputPrepend>
      <InputContent
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputGroup>
  );
}

export default Input;
