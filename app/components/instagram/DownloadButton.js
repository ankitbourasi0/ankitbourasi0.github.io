"use client"
import { Icons } from "@/app/components/Icons";



export const DownloadButton = ({ isLoading }) => {
  return (
    <>
      <button
        aria-label="Download Instagram video button"
        title="Download Instagram video button"
        type="submit"
        className="inline-flex items-center gap-2 rounded border border-slate-100 bg-white px-5 py-3.5 text-sm tracking-wide drop-shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-2 dark:focus:ring-zinc-400 active:scale-95 dark:border-none dark:bg-neutral-800 -700 max-md:w-full max-md:justify-center"
        disabled={isLoading}
      >
        {isLoading && (
          <>
            <Icons.loading />
            <span>Fetching</span>
          </>
        )}
        {!isLoading && (
          <>
            <Icons.download />
            <span>Download</span>
          </>
        )}
      </button>
    </>
  );
};
