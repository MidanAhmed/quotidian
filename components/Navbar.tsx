import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ModeToggle } from "./ModeToggle";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="sticky top-0 h-14 bg-background z-40">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-14 py-2 border-b text-xl font-bold">
          <Link href="/" className="tracking-tight">
            Quotidian.
          </Link>
          <div className="flex justify-between items-center gap-2">
            {isAuthenticated() ? (
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "outline" })}
              >
                Dashboard
              </Link>
            ) : (
              <LoginLink className={buttonVariants()}>Sign In</LoginLink>
            )}
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
