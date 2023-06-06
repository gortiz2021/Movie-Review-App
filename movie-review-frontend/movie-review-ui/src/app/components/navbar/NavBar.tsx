import React from 'react'

const NavBar = () => {
  return (
    <div className='border-4 border-black m-2'>    
        <nav >
            <div className='flex justify-between'>
                <div>
                    <a href='' className='mx-2'>Reel Rater</a>
                </div>

                <div>
                    <a href='' className='mx-2'>Login</a>                    
                    <a href='' className='mx-2'>Register</a>
                </div>  
            </div>
        </nav>
    </div>
  )
}

export default NavBar;
