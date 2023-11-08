import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <MaxWidthWrapper classname="text-sm text-muted-foreground mt-12">
      <footer className="py-3 border-t-2 text-center md:text-left md:flex md:items-center md:justify-between">
        <p>
          Quotes fetched from{" "}
          <Link
            href="https://github.com/lukePeavey/quotable"
            target="_blank"
            className=" underline underline-offset-4"
          >
            quotable
          </Link>
          . Illustrations by{" "}
          <Link
            href="https://undraw.co"
            target="_blank"
            className=" underline underline-offset-4"
          >
            unDraw
          </Link>
          .
        </p>
        <Button variant="outline" size="icon" className="mt-3 md:m-0">
          <Link href={siteConfig.links.github} target="_blank">
            <Github />
          </Link>
        </Button>
      </footer>
    </MaxWidthWrapper>
  );
}
