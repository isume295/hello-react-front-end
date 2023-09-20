import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGreetings } from './redux/greeting/greetingSlice';

export default function Greeting() {
  const { greetings, isLoading } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>{greetings}</h1>;
}
