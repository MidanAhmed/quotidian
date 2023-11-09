import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper classname="my-40 sm:my-52 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold max-w-4xl text-5xl md:text-6xl">
          Fuel your day with a daily drip of Quote!
        </h1>
        <p className="tracking-tight mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
          Discover daily inspiration with quotidian, where you&apos;ll receive a
          fresh and uplifting quote everyday delivered to your email at
          preferred time.
        </p>
      </MaxWidthWrapper>

      <MaxWidthWrapper classname="my-32 max-w-3xl">
        <blockquote className="border-l-4 pl-4 italic">
          &quot;When you meet someone better than yourself, turn your thoughts
          to becoming his equal. When you meet someone not as good as you are,
          look within and examine your own self.&quot;
        </blockquote>
        <footer className="mt-4 text-right">-- Confucius</footer>
      </MaxWidthWrapper>

      <MaxWidthWrapper classname="my-20">
        <Card>
          <CardHeader>
            <CardTitle>Benefits of reading quotes daily</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc [&>li]:mt-3">
              <li>
                <b>Encouragement during Challenges:</b> Quotes often convey
                messages of resilience and perseverance, serving as a reminder
                that challenges are a natural part of life and can be overcome
                with determination and patience.
              </li>
              <li>
                <b>Mindfulness and Reflection:</b> Reading quotes can encourage
                mindfulness and self-reflection, prompting you to pause and
                contemplate the deeper meaning of life, relationships, and
                personal experiences.
              </li>
              <li>
                <b>Language and Communication Skills:</b> Exposure to a variety
                of quotes can enrich your vocabulary and improve your
                communication skills by providing you with new ways to express
                thoughts, feelings, and ideas.
              </li>
              <li>
                <b>Daily Reminder of Values:</b> Regular exposure to quotes that
                resonate with your values can serve as a daily reminder of what
                is important to you, helping you stay aligned with your
                principles and goals.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            By incorporating daily quotes into your routine, you can experience
            these benefits and cultivate a more positive and enriching mindset.
          </CardFooter>
        </Card>
      </MaxWidthWrapper>

      {/* Steps section */}
      <MaxWidthWrapper classname="my-20">
        <Card>
          <CardHeader>
            <CardTitle>Steps to enroll</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 md:flex md:space-x-6 md:space-y-0">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 py-2">
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
              <Separator className="md:hidden" />
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 py-2">
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
              <Separator className="md:hidden" />
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 py-2">
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
                  <span className="text-xl font-semibold">That&apos;s it!</span>
                  <span className="mt-2 text-muted-foreground">
                    You are all set to recieve the email.
                  </span>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </>
  );
}
