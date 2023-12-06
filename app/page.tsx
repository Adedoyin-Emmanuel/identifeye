import Navbar from "./components/Navbar/Navbar";
import Link from "next/link";
import Button from "./components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen  bg-primary text-white overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto py-5 md:py-16 px-4 flex  lg:flex  lg:items-start  lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-28">
          <h1 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
            Revolutionizing Digital Identity
          </h1>
          <p className="py-5">
            Unlock a new era in digital identity with our groundbreaking project
            that seamlessly merges the power of blockchain technology and
            user-centric innovation.
          </p>

          <Link href={"/auth/signup"} className="block mt-10">
            <Button className="md:w-10/12">get started</Button>
          </Link>
        </div>

        <div className="lg:w-1/2  flex items-center  justify-center">
          <Image
            src="/assets/hero-image.png"
            alt="Hero Image 1"
            className="transform scale-110"
            height={600}
            width={600}
          />
        </div>
      </div>

      <div className="container mx-auto py-5 md:py-16 px-4  lg:flex  lg:items-start mt-10">
        <h1 className="md:text-4xl text-3xl relative md:left-5 font-bold capitalize mb-7">
          Solution
        </h1>
        <div className="lg:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/hero-image-2.png"
            alt="Hero Image 1"
            className=""
            height={500}
            width={500}
          />
        </div>

        <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-28">
          <h1 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
            DID Identifier
          </h1>
          <p className="py-5">
            A single decentralized Identification key for all KYC verification
            for individuals and businesses
          </p>

          <Link href={"/auth/signup"} className="block mt-10">
            <Button className="md:w-10/12">Learn more</Button>
          </Link>
        </div>
      </div>

      <section className="container mx-auto py-5 md:py-16 px-4  lg:flex lg:flex-col  lg:items-start mt-10">
        <h1 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
          Partners
        </h1>
        <section className="mx-auto flex items-center justify-center w-full my-5">
          <Image
            src={"/assets/partners.png"}
            width={500}
            height={300}
            alt="IdentifEye Partners"
          />
        </section>
      </section>

      <section className="container mx-auto py-5 md:py-16 px-4  lg:flex lg:flex-col  lg:items-start mt-10">
        <h1 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
          Meet the chefs behind IdentifEye
        </h1>
        <section className="w-full my-5 flex md:items-center justify-around md:flex-row flex-col ">
          <section className="flex items-center flex-col gap-y-5 md:border-transparent border-2 border-accent p-3 my-10 rounded">
            <Image
              src={"/assets/opemipo.png"}
              width={200}
              height={200}
              alt="Team Leader UI/UX Designer"
            />
            <p className="capitalize">Team Lead, UI/UX Designer</p>
          </section>
          <section className="flex items-center flex-col gap-y-5 md:border-transparent border-2 border-accent p-3 my-10 rounded">
            <Image
              src={"/assets/toriola.png"}
              width={200}
              height={200}
              alt="UI/UX Designer"
            />
            <p className="capitalize">UI/UX Designer</p>
          </section>

          <section className="flex items-center flex-col gap-y-5 md:border-transparent border-2 border-accent p-3 my-10 rounded">
            <Image
              src={"/assets/wasscoder.png"}
              width={200}
              height={200}
              alt="Software Engineer"
            />
            <p className="capitalize">Software Engineer</p>
          </section>

          <section className="flex items-center flex-col gap-y-5 md:border-transparent border-2 border-accent p-3 my-10 rounded">
            <Image
              src={"/assets/emmysoft.png"}
              width={200}
              height={200}
              alt="Lead Software Engineer"
            />

            <p className="capitalize">Lead Software Engineer</p>
          </section>
        </section>
      </section>

      <section className="container mx-auto py-5 md:py-16 px-4  lg:flex lg:flex-col  lg:items-start mt-10">
        {" "}
      </section>
    </main>
  );
}
