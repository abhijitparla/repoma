import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react'
import Navbar from "./Navbar";

const page = async () => {
  const session = getKindeServerSession()
  const user = await session.getUser()
  console.log(user)
    return (

    <div>
        <Navbar/>
      Welcome to remosys - {user.given_name} {user.family_name}
      Email: {user.email}
      <div>
      <LogoutLink>Log out</LogoutLink>
      </div>
      
    </div>
  )
}

export default page