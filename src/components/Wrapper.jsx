import React, { useContext } from 'react'
import { dataContext } from '../App'

const Wrapper = () => {
  const {data, setdata} =  useContext(dataContext)
  return (
    <div>Wrapper: {data}</div>
  )
}

export default Wrapper
