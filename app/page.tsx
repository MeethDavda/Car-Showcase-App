import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { getCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const carData = await getCars();

  const isDataEmpty = !Array.isArray(carData) || carData.length < 1 || !carData;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 px-10 py-5 max-w-[1000px] mx-auto">
        <div>
          <h1 className="font-bold text-3xl">Car Catalogue</h1>
          <p className="font-thin text-md mt-1">
            Explore the cars you might like
          </p>
        </div>
        <div className="flex flex-1 flex-row justify-between items-center mt-10 w-full">
          <SearchBar />
          <div className="flex flex-row justify-between items-center gap-5">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
            {carData?.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </section>
        ) : (
          <div className="font-bold text-xl">
            Oops, No resuslts
            <p>{carData?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
