import { MyContext } from '@/context/Context';
import { ShoppingCart } from 'lucide-react';
import React from 'react'

export default function Header() {
  const { cartList, setCartModal } = MyContext();

  return (
    <div className='fixed top-0 left-0 w-full z-50 flex items-center justify-end p-4 bg-white dark:bg-gray-900 shadow-md'>
      <div
        className="flex flex-row items-center gap-2 cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-foreground hover:bg-blue-800"
        onClick={() => setCartModal(true)}
      >
        <p className='text-xl text-white'>{cartList.length}</p>
        <ShoppingCart className='inline-block mr-2 text-white' size={16} />
      </div>
    </div>
  )
}

