import React from 'react'
import  {Link} from 'react-router-dom';
import PlusIcon from '../assets/plus-lg.svg'

const AddBtn = () => {
  return (
    <Link to='/note/new' className='floating-button'>
        <img src={PlusIcon} alt="Add" />
    </Link>
  )
}

export default AddBtn