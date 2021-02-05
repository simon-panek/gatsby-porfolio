import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import simonProfilePic from "../images/simon-profile-pic-edit-20200923-1.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/4 mx-auto mb-8"
          src={simonProfilePic}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-gray-400">
          Simon Panek
        </h2>

        <p className="leading-loose">
        I am a full stack developer. I have an MBA and have worked for an equipment manufacturing startup, 3D metal printing startup, and internationally.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
