import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Alphabet } from './Alphabet'


export const Header = () => {


  const nav = useNavigate()

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/search/${val.search}`);
      resetForm();
    }
  })

  return (
    <>
    <div className='bg-[#2C1404] h-[80px] flex gap-10 justify-between items-center sticky top-0 px-10'>
      <div><NavLink to="/" className='font-bold text-[30px] text-[#fee4ba]'>TheMealDb</NavLink></div>



      <ul className='flex gap-4'>
        <li><NavLink to="/" className='font-bold text-white'>home</NavLink></li>
        <li><NavLink to="/special" className='font-bold text-white'>Speciall</NavLink></li>

        <li className="relative group">
          <NavLink to='#' className='hover:bg-pink-500 text-white font-bold' >SelectLetter</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600">
           <Alphabet />
          </ul>

        </li>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            className='outline-none px-2 text-black'
            onChange={formik.handleChange}
            name='search'
            value={formik.values.search}
            type="text" placeholder='search food' />
        </div>
      </form>
      </ul>

    </div>

     
            </>
  )
}
