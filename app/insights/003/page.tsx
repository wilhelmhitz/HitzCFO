import Link from "next/link";
import Image from "next/image";

export default function CulturePage() {
  return (
    <main className="section-white">
      <section>
        <div className="container max-w-5xl">


          <Image
            src="/images/banner-articulo.png"
            alt="Executive Insights"
            width={1800}
            height={350}
            className="w-full rounded-lg mb-6"
            priority
          />



          <Link
            href="/#insights"
            className="inline-flex items-center text-sm font-medium text-[#B08D57] hover:underline mb-6"
          >
            ← Back to Executive Insights
          </Link>



          <p
            className="section-title"
            style={{
              fontSize: "1rem",
              letterSpacing: ".32em",
              fontWeight: 700,
            }}
          >
            Leadership
          </p>



          <h1
            style={{
              fontSize: "clamp(2.2rem,3.8vw,3.3rem)",
              lineHeight: 1.18,
              letterSpacing: "-1px",
              marginTop: "18px",
              maxWidth: "950px",
              fontWeight: 700,
            }}
          >
            La cultura empresarial: la gran ventaja competitiva
          </h1>



          <div className="gold-line" />



          <div className="flex gap-5 text-sm text-slate-500 mb-8">
            <span>August 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>




          <blockquote
            className="mb-10"
            style={{
              borderLeft: "4px solid #C8A96A",
              paddingLeft: "30px",
              fontSize: "1.7rem",
              lineHeight: "1.6",
              color: "#334155",
              fontStyle: "italic",
            }}
          >
            «La cultura no es lo que una empresa dice que es; es lo que las personas hacen cuando nadie las observa.»
          </blockquote>





          <article
            className="article-content mt-4"
            style={{
              fontSize: "1.12rem",
              lineHeight: "2",
              color: "#64748B",
            }}
          >



            <p>
              En mi experiencia, pocas decisiones de un Director General tienen
              un impacto tan profundo y duradero como la construcción de la
              cultura de una organización. Sin embargo, también es uno de los
              ámbitos a los que menos tiempo se dedica en los comités de
              dirección.
            </p>



            <p>
              Durante mi carrera he trabajado en compañías multinacionales y
              empresas familiares con culturas muy diferentes. Algunas lograban
              resultados extraordinarios con recursos limitados. Otras, pese a
              contar con enorme talento, avanzaban con enorme dificultad. La
              diferencia rara vez estaba en la estrategia; estaba en la cultura.
            </p>



            <p>
              La cultura determina cómo se toman las decisiones, cómo colaboran
              las personas, cómo se gestionan los errores y cómo reaccionan los
              equipos ante el cambio. En mi opinión, es el sistema operativo
              invisible de cualquier empresa y permea de arriba hacia abajo en
              la organización.
            </p>



            <p>
              Con frecuencia escucho hablar de transformación digital,
              inteligencia artificial o nuevos modelos de negocio. Todas estas
              iniciativas son importantes, pero ninguna prospera si la cultura
              continúa premiando la complacencia o la aversión al cambio.
            </p>



            <p>
              He comprobado que las organizaciones que crean más valor comparten
              algunos comportamientos: objetivos claros, responsabilidad
              individual, confianza, transparencia y una voluntad permanente de
              aprender. Estos elementos no aparecen por casualidad; son
              consecuencia directa del ejemplo del equipo directivo.
            </p>



            <p>
              Uno de los mayores errores consiste en pensar que la cultura
              pertenece al departamento de Recursos Humanos. La cultura
              pertenece a la Propiedad y al Director General. Cada decisión,
              cada promoción, cada reconocimiento y cada prioridad envían un
              mensaje sobre aquello que realmente importa.
            </p>



            <p>
              También he aprendido que cambiar una cultura requiere paciencia y
              tiempo. No se transforma mediante discursos inspiradores, sino
              mediante cientos de pequeñas decisiones coherentes mantenidas en
              el tiempo, alineadas con los valores.
            </p>



            <p>
              Cuando una organización consigue alinear estrategia, personas,
              procesos y cultura, la ejecución se acelera de forma natural. Los
              problemas se resuelven antes, las decisiones son más ágiles y la
              empresa desarrolla una inercia y una capacidad de adaptación
              difícil de imitar.
            </p>



            <p>
              Por eso creo que el legado más importante de un Director General
              no son únicamente los resultados obtenidos durante su mandato,
              sino la cultura que deja como base para el crecimiento futuro.
            </p>



          </article>



        </div>
      </section>
    </main>
  );
}