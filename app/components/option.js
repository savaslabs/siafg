import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

const option = ({ answer }) => {
  let { url } = useRouteMatch();
  return (
    <div htmlFor={answer.fields.identifier} className='shadow card'>
      <Link to={`${url}/result_${answer.fields.identifier}`}>
        {answer.fields.identifier}

        <input
          type='radio'
          id={answer.fields_identifier}
          value={answer.fields.identifer}
          name='test'
          aria-checked
          data-next-step
        />
      </Link>
    </div>
  );
}

export default option
