import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import modS from "../images/mods-npm-screen-capture.png";
import modS2 from "../images/mod-s-app-screen-capture.png";
import gamesis from "../images/gamesis-5000-cover.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
          Hi my name is Simon, and I am a software engineer. I entered the tech industry after seeing many of the interesting and influential projects that some of my closest friends have worked on in their tech careers. I have seen how they are constantly learning and solving new problems. In previous roles, I have thrived when constant learning was a primary requirement for success. I enjoy the learning process and am fulfilled when I am able to develop a uniquely efficient solution to a problem. 
          </blockquote>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="Mod-Support npm Package" src={modS} />
          <a
              className="text-black no-underline"
              href="https://www.npmjs.com/package/mod-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
            <a> | </a>
          <a
              className="text-black no-underline"
              href="https://github.com/Mod-s/module-docs-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
        </figure>
      </section>
      <section id="portfolio">
      <figure className="w-2/3 md:w-1/3 portfolioImage">
          <img alt="Mod-Support CLI" src={modS2} />
          <a
              className="text-black no-underline"
              href="https://github.com/Mod-s/module-docs-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mod-Support on GitHub
            </a>
            </figure>
      <figure id="gamesisFigure" className="w-2/3 md:w-1/3 portfolioImage">
          <img alt="Gamesis 5000 video game inventory app" src={gamesis} />
          <a
              className="text-black no-underline"
              href="https://github.com/Mod-s/module-docs-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gamesis-5000 on GitHub
            </a>
            </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
