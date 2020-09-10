import React from 'react';

import { 
    InputGroup,
    InputPrepend,
    Input
} from './style';

export default props => {
  return (
      <InputGroup>
        <InputPrepend>
            { props.icon }
        </InputPrepend>
        <Input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
        />
      </InputGroup>
  );
}
