
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "./common/Header";

export default async function Home() {
  const user = getKindeServerSession()
  console.log(await user.isAuthenticated())
  return (
    <div>
      {/* <Header/> */}
    </div>
  );
}
