import Hero from "@/components/destinations/Hero";
import Places from "@/components/destinations/Places";
import NavBar from "@/components/common/NavBar";


export default function Home() {
    return(
        <main className="relative poppins  md:px-[9rem]">
        <NavBar />

        <div className="px-4 flex flex-col gap-[7.69rem]">
            <Hero/>
            <Places/>
        </div>
        </main>
    )
}