import React, { useContext } from 'react'
import { counterContext } from '../context/context'

// The Component1 component is a functional component that uses the useContext hook to access the value of the counterContext. It retrieves the count value from the context and displays it inside a div element. Whenever the count value changes, this component will re-render to reflect the updated count.

const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
    {value.count}
    </div>
  )
}

export default Component1