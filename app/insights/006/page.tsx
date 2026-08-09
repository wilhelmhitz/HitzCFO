import Link from "next/link";
import Image from "next/image";

export default function TransformationPage() {
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
            Business Transformation
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
            Las empresas no cambian cuando cambia la estrategia; cambian cuando cambian los hábitos
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
            «La transformación no empieza cuando se aprueba un plan. Empieza cuando las personas empiezan a trabajar de forma diferente.»
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
              A lo largo de mi carrera he participado en procesos de
              transformación muy distintos. Algunos afectaban a la organización
              completa; otros estaban relacionados con la implantación de
              nuevos sistemas, cambios organizativos o nuevas formas de
              gestionar el negocio. Aunque cada proyecto tenía objetivos
              diferentes, con el tiempo he comprobado que todos compartían un
              mismo desafío: conseguir que las personas cambiaran sus hábitos.
            </p>


            <p>
              Ése es, probablemente, el aspecto más complejo de cualquier
              transformación.
            </p>


            <p>
              Diseñar una estrategia exige análisis. Implantar una nueva
              herramienta requiere planificación. Definir un modelo organizativo
              implica tomar decisiones. Todo eso es importante, pero nada
              garantiza que la empresa vaya a cambiar realmente. El cambio solo
              empieza cuando las personas modifican la forma en que trabajan
              cada día.
            </p>


            <p>
              Con frecuencia hablamos de transformación como si fuera un
              proyecto con fecha de inicio y de finalización. Se presenta un
              plan, se crea un comité de seguimiento, se definen hitos y se
              comunica a toda la organización. Sin embargo, cuando pasan unos
              meses, muchas empresas descubren que los procesos siguen siendo
              prácticamente los mismos y que las decisiones continúan tomándose
              igual que antes.
            </p>


            <p>
              No suele ser un problema de falta de esfuerzo. Tampoco de
              recursos. En mi experiencia, la mayor dificultad está en que las
              organizaciones intentan cambiar procedimientos sin cambiar
              comportamientos.
            </p>


            <p>
              He vivido situaciones en las que la tecnología estaba preparada
              antes que las personas. El nuevo sistema funcionaba correctamente,
              los procesos estaban bien definidos y el proyecto parecía
              técnicamente impecable. Sin embargo, el cambio avanzaba mucho más
              despacio de lo esperado porque la organización seguía trabajando
              con la lógica anterior. Las herramientas habían cambiado; los
              hábitos, todavía no.
            </p>


            <p>
              Con los años he aprendido que las transformaciones más sólidas no
              empiezan hablando de sistemas. Empiezan hablando de propósito. Las
              personas necesitan comprender por qué es necesario cambiar, qué
              problema se intenta resolver y qué beneficios obtendrá la
              organización si el cambio tiene éxito. Cuando ese propósito no
              está claro, cualquier dificultad se convierte en una razón para
              volver a hacer las cosas como siempre.
            </p>


            <p>
              También he comprobado que los hábitos no cambian mediante grandes
              discursos. Cambian a través del ejemplo. Si el equipo directivo
              continúa actuando como antes, la organización entiende
              rápidamente que el cambio no era tan importante. En cambio,
              cuando los líderes modifican su forma de decidir, de reunirse, de
              priorizar y de colaborar, el resto de la empresa empieza a
              interpretar que el cambio va en serio.
            </p>


            <p>
              Existe otra idea que considero especialmente importante. Muchas
              organizaciones celebran el final de un proyecto de transformación
              el mismo día que ponen en marcha un nuevo sistema o una nueva
              estructura organizativa. En realidad, ese día no termina nada. Ese
              día empieza el verdadero trabajo.
            </p>


            <p>
              Es durante los meses siguientes cuando aparecen las resistencias,
              los pequeños problemas, las dudas y la tentación de volver a las
              prácticas anteriores. Es precisamente en ese momento cuando el
              liderazgo resulta más determinante. Transformar una organización
              exige constancia, paciencia y la capacidad de mantener el rumbo
              incluso cuando los resultados todavía no son visibles.
            </p>


            <p>
              Después de muchos años participando en procesos de cambio, sigo
              convencido de que la verdadera transformación nunca consiste en
              implantar una nueva herramienta ni en rediseñar un organigrama.
              Consiste en conseguir que la organización adopte nuevos hábitos de
              forma natural, porque ha comprendido que son la mejor manera de
              alcanzar sus objetivos.
            </p>


          </article>


        </div>
      </section>
    </main>
  );
}