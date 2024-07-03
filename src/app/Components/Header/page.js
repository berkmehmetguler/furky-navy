import Link from 'next/link'

import React from 'react'

const header = () => {
  return (

    <header>
        <div className="flex items-center space-x-6 justify-between p-4 bg-slate-700">
            <nav>
                <ul className="flex items-center space-x-4">
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