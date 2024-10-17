import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react'
import Navbar from "./Navbar";
import DashboardPage from "./Navbar";

const page = async () => {
  const session = getKindeServerSession()
  const user = await session.getUser()
  console.log(user)
  return (
    <div>
      <DashboardPage />
    </div>
  )
}

export default page