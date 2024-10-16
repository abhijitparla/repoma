
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const user = getKindeServerSession()
  console.log(await user.isAuthenticated())
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello, welocome to real estate portfolio management system
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
