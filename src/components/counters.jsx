import React from 'react';
import Counter from './counter';

const Counters = ({counters, onReset, ...rest}) => {

  return <div>
    <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
    {counters.map(counter => {
      return <Counter key={counter.id} {...counter} {...rest} />
    })}
  </div>;
}

export default Counters;