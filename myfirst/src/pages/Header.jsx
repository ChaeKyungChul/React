import React from 'react'

const Header = (props) => {
  return (
    <div>
      <span>{props.name}입니다.</span>
      <span>{props.age}살입니다.</span>
    </div>
  )
}

export default Header