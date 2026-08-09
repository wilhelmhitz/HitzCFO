import Link from "next/link";
import Image from "next/image";

export default function CreatingValuePage() {
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
            El verdadero trabajo del Director General: crear valor
          </h1>


          <div className="gold-line" />


          <div className="flex gap-5 text-sm text-slate-500 mb-8">
            <span>July 2026</span>
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
            «El trabajo de un Director General no consiste en gestionar el presente, sino en aumentar el valor futuro de la empresa.»
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
              Si preguntáramos a cien Directores Generales en qué han empleado
              su jornada de hoy, probablemente escucharíamos respuestas muy
              parecidas. Han aprobado facturas, respondido correos, participado
              en reuniones, resuelto conflictos y revisado presupuestos. Han
              trabajado intensamente. Sin embargo, la verdadera pregunta no es
              cuánto han trabajado, sino cuánto de ese trabajo ha creado
              realmente valor para la empresa.
            </p>


            <p>
              Porque el trabajo del Director General nunca ha consistido en
              aprobar facturas, responder correos electrónicos o asistir a
              reuniones. Esas son actividades necesarias, pero no justifican
              la existencia del puesto. La razón de ser de un Director General
              es aumentar el valor de la empresa y asegurar que mañana sea más
              fuerte que hoy.
            </p>


            <p>
              Gestionar es garantizar que el negocio funcione hoy. Dirigir es
              preparar a la empresa para competir mejor mañana. La primera
              tarea exige disciplina operativa; la segunda requiere visión,
              criterio y la capacidad de invertir tiempo en decisiones cuyos
              beneficios no siempre son inmediatos.
            </p>


            <p>
              Crear valor significa fortalecer la capacidad de la organización
              para generar mejores resultados en el futuro. La transformación
              empresarial sostenible ocurre cuando estrategia, personas y
              ejecución trabajan plenamente alineadas. Los líderes generan
              impacto estableciendo una dirección clara, desarrollando a las
              personas y construyendo una cultura de responsabilidad, mejora
              continua y creación sostenible de valor.
            </p>


            <p>
              Existe una tendencia natural en todas las organizaciones a
              confundir actividad con progreso. Las reuniones, los informes y
              los comités transmiten sensación de avance. Sin embargo, la
              actividad solo crea valor cuando mejora la capacidad futura de la
              organización para decidir mejor, ejecutar con mayor rapidez y
              adaptarse antes que sus competidores.
            </p>


            <p>
              En distintas etapas de mi carrera he vivido procesos de
              transformación muy diferentes: compañías multinacionales con
              estructuras altamente profesionalizadas, empresas familiares
              inmersas en cambios profundos y organizaciones que necesitaban
              redefinir su modelo de gestión. El contexto cambiaba, pero la
              lección siempre era la misma: los mejores resultados no nacen de
              controlar más, sino de construir organizaciones más claras, más
              ágiles y con mayor autonomía.
            </p>


            <p>
              Recuerdo también situaciones en las que los equipos directivos
              dedicaban la mayor parte de su energía a resolver incidencias
              operativas. Las reuniones terminaban con largas listas de tareas,
              pero pocas decisiones que modificaran realmente el futuro de la
              empresa. Cuando conseguimos desplazar la conversación desde los
              problemas cotidianos hacia las capacidades que debíamos construir,
              los resultados empezaron a cambiar de forma sostenida. No fue un
              cambio inmediato, pero sí duradero.
            </p>


            <p>
              Uno de los errores más frecuentes en la alta dirección es creer
              que el Director General debe ser el centro de todas las
              decisiones. En realidad, cuanto más depende una empresa de una
              sola persona, más frágil se vuelve. El liderazgo madura cuando
              desarrolla criterio en otros, crea equipos capaces de decidir y
              convierte la responsabilidad en una práctica cotidiana.
            </p>


            <p>
              He comprobado igualmente que las mejores transformaciones no
              comenzaron con la implantación de un ERP, una reestructuración o
              una nueva herramienta tecnológica. Comenzaron cuando el equipo
              directivo compartió una visión común, acordó prioridades y aceptó
              cambiar hábitos profundamente arraigados. La tecnología aceleró
              el proceso; el liderazgo lo hizo posible.
            </p>


            <p>
              Por eso creo que una de las preguntas más útiles que un Director
              General puede hacerse al finalizar la jornada no es cuántos
              asuntos ha cerrado, sino qué decisiones ha tomado que hagan a la
              empresa más fuerte, más competitiva y más preparada para el
              futuro.
            </p>


          </article>


        </div>
      </section>
    </main>
  );
}