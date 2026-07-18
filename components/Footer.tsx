"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#061728] text-white">

      <div className="container py-10">

        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-slate-500">

            <p>
              © {year} Wilhelm Hitz. All rights reserved.
            </p>


            <p>
              Executive Leadership • Business Transformation • Value Creation
            </p>


          </div>

        </div>

      </div>

    </footer>
  );
}