import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper classname="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold max-w-4xl text-5xl md:text-6xl">
          Fuel your day with a daily drip of Quote!
        </h1>
        <p className="tracking-tight mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
          Discover daily inspiration with quotidian, where you&apos;ll receive a
          fresh and uplifting quote everyday delivered to your email at
          preferred time.
        </p>
      </MaxWidthWrapper>

      {/* Steps section */}
      <div className="mx-auto mb-32 max-w-5xl sm:mt-56">
        <ol className="my-8 px-5 space-y-6 pt-8 max-w-fit mx-auto md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm text-muted-foreground">Step 1</span>
              <Image
                src="/steps/step-1-light.png"
                width={300}
                height={200}
                alt="step 1"
                quality={100}
                className="block dark:hidden border-2 rounded-lg"
              />
              <Image
                src="/steps/step-1-dark.png"
                width={300}
                height={200}
                alt="step 1"
                quality={100}
                className="dark:block hidden border-2 rounded-lg"
              />
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-muted-foreground">
                Sign up today to get your vial of inspiration.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm text-muted-foreground">Step 2</span>
              <Image
                src="/steps/step-2-light.png"
                width={300}
                height={200}
                alt="step 2"
                quality={100}
                className="block dark:hidden border-2 rounded-lg"
              />
              <Image
                src="/steps/step-2-dark.png"
                width={300}
                height={200}
                alt="step 2"
                quality={100}
                className="dark:block hidden border-2 rounded-lg"
              />
              <span className="text-xl font-semibold">
                Tweak your Email Preferences
              </span>
              <span className="mt-2 text-muted-foreground">
                Customize the timing of the email to your liking.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm text-muted-foreground">Step 3</span>
              <Image
                src="/steps/step-3-light.png"
                width={300}
                height={200}
                alt="step 3"
                quality={100}
                className="block dark:hidden border-2 rounded-lg"
              />
              <Image
                src="/steps/step-3-dark.png"
                width={300}
                height={200}
                alt="step 3"
                quality={100}
                className="dark:block hidden border-2 rounded-lg"
              />
              <span className="text-xl font-semibold">
                That&apos;s it!
              </span>
              <span className="mt-2 text-muted-foreground">
                You are all set to recieve the email.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
