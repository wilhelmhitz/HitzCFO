"use client";

import Image from "next/image";

export default function FeaturedBook() {
  return (
    <section
      id="book"
      className="section-grey scroll-mt-32 !pt-16 !pb-20"
    >
      <div className="container">

        <div className="max-w-6xl mx-auto">

          <p className="section-title">
            Featured Book · Español 🇪🇸
          </p>

          <h2 className="mt-5">
            El CFO como creador de valor
          </h2>

          <p
            style={{
              color: "#64748B",
              fontSize: "1.15rem",
              marginTop: "12px",
              marginBottom: "40px",
              maxWidth: "950px",
            }}
          >
            Del control financiero al liderazgo estratégico: cómo transformar
            datos, decisiones y personas para construir empresas más fuertes.
          </p>


          <div className="grid lg:grid-cols-[400px_1fr] gap-20 items-center">

            {/* PORTADA */}

            <div className="flex justify-center">

              <Image
                src="/images/el-cfo-como-creador-de-valor.webp"
                alt="El CFO como creador de valor"
                width={380}
                height={540}
                className="rounded-lg shadow-xl"
                priority
              />

            </div>


            {/* DESCRIPCIÓN */}

            <div>

              <p className="leading-8 text-slate-600 mb-6">
                Durante décadas, la Dirección Financiera se definió por el
                control: cerrar bien, informar con rigor y proteger los
                recursos de la empresa.
              </p>

              <p className="leading-8 text-slate-600 mb-6">
                Wilhelm Hitz sostiene que ese papel ya no basta. Con más de
                treinta años de liderazgo ejecutivo en empresas multinacionales
                y familiares, el autor muestra cómo el CFO moderno puede
                convertirse en un auténtico creador de valor: alguien capaz de
                conectar estrategia, ejecución, transformación digital y
                liderazgo empresarial.
              </p>

              <p className="leading-8 text-slate-600 mb-6">
                A través de veinticuatro capítulos, el libro recorre las
                principales palancas de creación de valor: modelo de negocio,
                rentabilidad, caja, capital circulante, inversión, riesgo,
                transformación digital, inteligencia artificial, fusiones y
                adquisiciones, reestructuración y desarrollo de equipos de alto
                rendimiento.
              </p>

              <p className="leading-8 text-slate-600 mb-6">
                Más que un manual financiero, es una reflexión práctica para
                Directores Financieros, CEOs, empresarios y directivos que
                desean construir organizaciones más sólidas, ágiles y valiosas.
              </p>

              <blockquote
                style={{
                  marginTop: "35px",
                  borderLeft: "3px solid #C8A96A",
                  paddingLeft: "25px",
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                  fontStyle: "italic",
                  color: "#334155",
                }}
              >
                "La estrategia sin ejecución no crea valor. El CFO del futuro
                no será recordado por la precisión de sus números, sino por la
                empresa que ayudó a construir."
              </blockquote>

            </div>

          </div>


          {/* DISPONIBILIDAD */}

          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
            }}
          >

            <p className="section-title justify-center">
              Ya disponible
            </p>


            <div
              className="max-w-md mx-auto"
              style={{
                marginTop: "30px",
              }}
            >

              <a
                href="https://www.amazon.es/dp/B0HFNCSTDT"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Comprar El CFO como creador de valor en Amazon Kindle"
              >

                <div className="card text-center !py-10 cursor-pointer">

                  <Image
                    src="/images/platforms/Amazon.png"
                    alt="Amazon Kindle"
                    width={200}
                    height={110}
                    className="mx-auto mb-5 object-contain"
                  />

                  <p className="text-lg font-medium text-[#0B2545]">
                    Disponible en Amazon Kindle
                  </p>

                  <p className="mt-2 text-sm text-[#B08D57] font-medium">
                    Ver libro en Amazon →
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}