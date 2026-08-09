"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";


export default function Contact() {

  return (

    <section
      id="contact"
      className="section-grey scroll-mt-32"
    >


      <div className="container">



        <motion.div

          initial={{ opacity:0,y:40 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ duration:0.8 }}

          className="max-w-5xl"

        >



          <p className="section-title">

            Contact

          </p>




          <h2 className="mt-5">

            Let's connect and explore
            <br />
            new opportunities.

          </h2>





          <div className="gold-line" />





          <p className="section-intro max-w-5xl">

            I am open to conversations around executive leadership
            opportunities, board positions and advisory roles where my
            experience in business transformation, value creation and
            organisational change can contribute to sustainable growth.

          </p>




        </motion.div>







        <motion.div

          initial={{ opacity:0,y:35 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ duration:0.7 }}

          className="
          mt-16
          flex
          flex-col
          md:flex-row
          justify-between
          gap-12
          max-w-5xl
          "

        >




          {/* EMAIL */}



          <div className="flex items-center gap-5">



            <Mail
              size={28}
              className="text-[#C8A96A]"
            />



            <div>



              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">

                Email

              </p>




              <a
                href="mailto:w@hitzcfo.com"
                className="mt-2 block text-lg font-medium text-[#0B2545]"
              >

                W@HitzCFO.com

              </a>



            </div>



          </div>








          {/* PHONE */}



          <div className="flex items-center gap-5">



            <Phone
              size={28}
              className="text-[#C8A96A]"
            />



            <div>



              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">

                Phone

              </p>





              <a
                href="tel:+34628182169"
                className="mt-2 block text-lg font-medium text-[#0B2545]"
              >

                +34 628 182 169

              </a>




            </div>



          </div>





        </motion.div>





      </div>



    </section>

  );

}