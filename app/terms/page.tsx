import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Sugar Blooms</title>
        <meta
          name="description"
          content="Read the terms and conditions for Sugar Blooms, Derry's premier cupcake bakery."
        />
        <meta
          name="keywords"
          content="terms, conditions, Sugar Blooms, Derry bakery, Northern Ireland"
        />
      </Head>
      <div>
        <h1>Terms and Conditions</h1>
        <p>Welcome to Sugar Blooms!</p>

        <h2>Introduction</h2>
        <p>
          These Terms and Conditions govern your use of our website located at{" "}
          <a href="https://sugarblooms.co.uk">sugarblooms.co.uk</a> (the
          "Service") operated by Sugar Blooms ("us", "we", or "our").
        </p>

        <h2>Account Creation</h2>
        <p>
          To use certain features of the Service, you may be required to create
          an account. You agree to provide and maintain accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete. We
          reserve the right to suspend or terminate your account if any
          information provided during the registration process or thereafter
          proves to be inaccurate, not current, or incomplete.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are
          owned by Sugar Blooms and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by Sugar Blooms. We have no control over,
          and assume no responsibility for, the content, privacy policies, or
          practices of any third-party websites or services. You acknowledge and
          agree that Sugar Blooms shall not be responsible or liable, directly
          or indirectly, for any damage or loss caused or alleged to be caused
          by or in connection with the use of any such content, goods, or
          services available on or through any such websites or services.
        </p>

        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will try to
          provide at least 30 days' notice prior to the effective date of the
          revised Terms. What constitutes a material change will be determined
          at our sole discretion.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
          <li>By email: info@sugarblooms.co.uk</li>
          <li>
            By visiting this page on our website:{" "}
            <a href="https://sugarblooms.co.uk/contact">
              sugarblooms.co.uk/contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
