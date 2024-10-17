import React from 'react'
import { MainNav } from '../dashboard/main-nav'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '../dashboard/toggle'
import { UserNav } from '../dashboard/user-nav'

const Header = () => {
  return (
    <div>
      <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <Link href={"/dashboard"}>
            <MainNav className="mx-6 cursor-pointer" />
            </Link>
            
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <Link href={'/property'}>
              <Button>Add Property + </Button>
              </Link>
              
              <ModeToggle/>
              <UserNav />
            </div>
          </div>
    </div>
  )
}

export default Header
