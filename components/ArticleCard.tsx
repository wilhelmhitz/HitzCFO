import Link from "next/link";

export default function ArticleCard() {
  return (
    <article className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition">

      <div className="text-xs uppercase tracking-[0.2em] text-[#B08D57]">
        Leadership
      </div>

      <h2 className="mt-4 text-3xl font-light text-[#0B2545]">
        The Real Job of a GM/MD: Creating Value
      </h2>

      <p className="mt-6 text-slate-600 leading-relaxed">
        Creating value is the true responsibility of every Chief Executive.
        Operations keep the business running today. Leadership prepares it for tomorrow.
      </p>

      <Link
        href="/insights/creating-value"
        className="inline-block mt-8 text-[#B08D57] hover:underline"
      >
        Read article →
      </Link>

    </article>
  );
}