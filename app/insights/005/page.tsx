import Link from "next/link";
import Image from "next/image";

export default function KPIsPage() {
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
            Performance Management
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
            Los KPIs no sirven para controlar; sirven para decidir
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
            «Un indicador solo tiene valor cuando ayuda a tomar una decisión mejor.»
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
              Durante buena parte de mi carrera he trabajado rodeado de
              indicadores. Cuadros de mando, informes financieros, previsiones,
              análisis de desviaciones o reuniones mensuales para revisar
              resultados han formado parte de mi día a día. Sin embargo, con el
              paso de los años he descubierto que el verdadero problema de
              muchas organizaciones no es la falta de información. Es,
              precisamente, el exceso de ella.
            </p>


            <p>
              Hoy resulta relativamente sencillo medir casi cualquier cosa.
              Los sistemas generan miles de datos en tiempo real y la
              tecnología permite construir cuadros de mando cada vez más
              sofisticados. Paradójicamente, esa enorme disponibilidad de
              información no siempre conduce a mejores decisiones. En ocasiones
              ocurre exactamente lo contrario: cuanto más medimos, más difícil
              resulta identificar qué es realmente importante.
            </p>


            <p>
              He participado en comités de dirección donde se dedicaban horas
              a revisar indicadores que apenas provocaban ninguna decisión.
              Todos conocían las cifras, todos comentaban las desviaciones y
              todos encontraban una explicación razonable para lo ocurrido.
              Sin embargo, al terminar la reunión la organización seguía
              exactamente igual que antes de empezar.
            </p>


            <p>
              Aquella experiencia me hizo cambiar mi forma de entender los KPIs.
              En mi opinión, un indicador no existe para controlar a las
              personas. Existe para ayudar a decidir. Puede parecer una
              diferencia semántica, pero cambia completamente la conversación
              dentro de una empresa.
            </p>


            <p>
              Cuando los indicadores se utilizan como un mecanismo de control,
              las reuniones terminan centrándose en justificar el pasado. Cada
              desviación necesita una explicación y cada responsable intenta
              demostrar que las causas están fuera de su ámbito de actuación.
              El tiempo se dedica a analizar lo que ya ha ocurrido y apenas
              queda espacio para decidir qué debería hacerse a continuación.
            </p>


            <p>
              Cuando los indicadores están diseñados para facilitar decisiones,
              la dinámica cambia. La pregunta deja de ser «¿qué ha pasado?» y
              pasa a ser «¿qué debemos hacer ahora?».
            </p>


            <p>
              Creo que una de las responsabilidades del Director General
              consiste precisamente en simplificar esa complejidad. No se trata
              de disponer de más información, sino de identificar aquellas pocas
              variables que explican el comportamiento del negocio y ayudan a
              anticipar las decisiones más relevantes.
            </p>


            <p>
              En varias etapas de mi carrera hemos reducido de forma
              significativa el número de indicadores presentes en los comités de
              dirección. Lejos de perder calidad, las reuniones mejoraron. Se
              dedicó menos tiempo a revisar cifras y más tiempo a debatir
              decisiones. Los equipos empezaron a hablar menos de indicadores y
              más de prioridades. Y, curiosamente, los resultados también
              mejoraron.
            </p>


            <p>
              Existe otra idea que con frecuencia olvidamos. Un indicador nunca
              cambia una empresa. Lo que cambia una empresa son las decisiones
              que se toman a partir de ese indicador.
            </p>


            <p>
              Por esa razón siempre me ha parecido más útil preguntarme qué
              decisión provocará un determinado KPI antes incluso de
              incorporarlo al cuadro de mando. Si nadie va a actuar de forma
              diferente cuando ese indicador cambie, probablemente no merece la
              pena medirlo.
            </p>


            <p>
              Después de muchos años trabajando con sistemas de información,
              sigo convencido de que los mejores cuadros de mando no son los
              que contienen más datos, sino los que ayudan a decidir con mayor
              rapidez, alinean a la organización y mantienen el foco en aquello
              que realmente crea valor.
            </p>


            <p>
              Al final, medir nunca debería convertirse en un fin en sí mismo.
              Medimos para comprender mejor el negocio, para anticiparnos a los
              problemas y, sobre todo, para tomar mejores decisiones. Todo lo
              demás es información que quizá resulte interesante, pero que
              difícilmente hará avanzar a una organización.
            </p>


          </article>


        </div>
      </section>
    </main>
  );
}