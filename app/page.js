import InstagramForm from "@/app/components/instagram/InstagramForm";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500','600','700','500','300'],
}) 
export default function HomePage() {
  return (
    <main  className={` ${poppins.className} container font-poppins mx-auto my-8 w-full flex-1 rounded p-4 md:max-w-3xl`} >
      <section className="mb-8 motion-safe:animate-[animate-drop_1.5s_ease-in-out_1]">
        <h1 className="mb-2 text-center  text-3xl font-[600] sm:text-4xl">
          Instagram Reels Downloader
        </h1>
        <p className="mx-auto mb-4 text-center text-sm sm:text-base">
          Instagram Reel & Video Saver App, designed to download high-quality
          Instagram content for free without any efforts. No registration or account required. You
          can save videos and reels by copying and pasting their URL.
        </p>
      </section>
      <section>
        <InstagramForm />
        <p className="my-4 text-center text-sm text-gray-500 motion-safe:animate-[animate-late-fade-in_2s_ease-in-out_1] dark:text-gray-400">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section>

      
    </main>
  );
}
