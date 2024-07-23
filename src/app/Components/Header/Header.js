import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const header = () => {
  return (

    <header className='bg-slate-300 font-semibold text-xl'>
        <div className="flex items-center px-20 w-full p-4 bg-slate-700">
            <nav className='flex justify-between w-full '>

                <Link href="/" className="text-white  ">
                    <Image src="/rlogo.png" alt="Logo" width={70} height={70} />
                </Link>

                <ul className="flex  items-center space-x-4">
                    <li>
                        <Link href="/" className="text-white">Ev</Link>
                    </li>
                    <li>
                        <Link href="/home" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
  )
}


export default header