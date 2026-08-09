"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const articles = [
  {
    number: "001",
    title: "El verdadero trabajo del Director General: crear valor",
    category: "Leadership",
    language: "🇪🇸 Spanish version",
    date: "July 2026 · 8 min read",
    description:
      "Crear valor es la verdadera responsabilidad de un Director General. Gestionar las operaciones mantiene la empresa funcionando hoy. El liderazgo prepara la organización para competir mejor mañana.",
    href: "/insights/001",
  },
  {
    number: "002",
    title: "La estrategia sin ejecución no crea valor",
    category: "Strategy",
    language: "🇪🇸 Spanish version",
    date: "July 2026 · 8 min read",
    description:
      "Incluso la mejor estrategia pierde su valor sin una ejecución disciplinada. La ventaja competitiva sostenible se construye alineando prioridades, personas y responsabilidad para convertir la visión estratégica en resultados.",
    href: "/insights/002",
  },
  {
    number: "003",
    title: "La cultura: la ventaja competitiva que nadie puede copiar",
    category: "Leadership",
    language: "🇪🇸 Spanish version",
    date: "August 2026 · 8 min read",
    description:
      "La cultura empresarial no se construye con valores escritos en una pared, sino con las decisiones, comportamientos y prioridades que los líderes refuerzan cada día. La verdadera ventaja competitiva aparece cuando la cultura impulsa la estrategia y la ejecución.",
    href: "/insights/003",
  },
  {
    number: "004",
    title: "El liderazgo consiste en desarrollar la capacidad de decidir de otros",
    category: "Leadership",
    language: "🇪🇸 Spanish version",
    date: "August 2026 · 8 min read",
    description:
      "El papel de un Director General no es tomar todas las decisiones importantes, sino construir una organización capaz de decidir correctamente sin depender constantemente de él. El verdadero liderazgo crea autonomía, responsabilidad y fortaleza organizativa.",
    href: "/insights/004",
  },
  {
    number: "005",
    title: "Los KPIs no existen para controlar. Existen para ayudar a decidir",
    category: "Performance Management",
    language: "🇪🇸 Spanish version",
    date: "August 2026 · 8 min read",
    description:
      "El propósito de los indicadores de gestión no es controlar la actividad, sino mejorar la toma de decisiones. Las organizaciones más eficaces se enfocan en los pocos indicadores que impulsan mejores decisiones, una ejecución más sólida y una creación sostenible de valor.",
    href: "/insights/005",
  },
  {
    number: "006",
    title: "La transformación empresarial comienza cuando cambian los comportamientos",
    category: "Business Transformation",
    language: "🇪🇸 Spanish version",
    date: "August 2026 · 8 min read",
    description:
      "Las transformaciones exitosas no dependen únicamente de nuevas estrategias, sistemas o estructuras organizativas, sino del cambio de los comportamientos diarios. El cambio sostenible ocurre cuando nuevas formas de pensar y trabajar forman parte de la cultura de la organización.",
    href: "/insights/006",
  },
];



export default function ExecutiveInsights() {

  return (

    <section
      id="insights"
      className="section-white scroll-mt-32"
    >

      <div className="container">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >


          <p className="section-title">
            Executive Insights
          </p>



          <h2 className="mt-5">

            Practical insights on leadership,
            <br />
            transformation and sustainable value creation.

          </h2>



          <div className="gold-line" />



          <p className="section-intro max-w-5xl">

            Drawing on more than thirty years of executive leadership across
            multinational corporations and family-owned businesses, these
            articles share practical perspectives to help leaders create
            sustainable value and drive business performance.

          </p>



          <p className="mt-4 text-sm text-[#B08D57]">

            Articles available only in Spanish 🇪🇸

          </p>



        </motion.div>





        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">



          {articles.map((article, index) => (


            <motion.div

              key={article.title}

              initial={{ opacity: 0, y: 35 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration:0.5,
                delay:index * 0.08,
              }}

              className="card flex flex-col"

            >



              <p
                style={{
                  fontSize:"0.62rem",
                  letterSpacing:".30em",
                  color:"#64748B",
                  fontWeight:500,
                  textTransform:"uppercase",
                  marginBottom:"2px",
                }}
              >
                Executive Insights
              </p>




              <p
                style={{
                  fontSize:"0.82rem",
                  letterSpacing:".28em",
                  color:"#64748B",
                  fontWeight:600,
                  marginBottom:"18px",
                }}
              >

                {article.number}

              </p>





              <h3
                style={{
                  fontSize:"1.9rem",
                  lineHeight:"1.22",
                  letterSpacing:"-0.5px",
                  color:"#0B2545",
                }}
              >

                {article.title}

              </h3>





              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#C8A96A]">

                {article.category}

              </p>




              <p className="mt-3 text-xs text-[#B08D57]">

                {article.language}

              </p>




              <p className="mt-2 text-sm text-slate-500">

                {article.date}

              </p>




              <p className="mt-6 leading-8 text-slate-600 flex-grow">

                {article.description}

              </p>




              <Link
                href={article.href}
                className="mt-8 inline-flex font-medium text-[#0B2545] hover:text-[#C8A96A] transition-colors"
              >

                Read article →

              </Link>



            </motion.div>


          ))}



        </div>



      </div>


    </section>

  );

}