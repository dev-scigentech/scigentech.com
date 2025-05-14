import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Privacy Policy | SciGen Technologies",
  description: "Terms of service, privacy policy and GDPR compliance information for SciGen Technologies",
}

export default function TermsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Terms & Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: May 13, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to SciGen Technologies ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of
              Service") govern your use of our website and software solutions (collectively, our "Services") operated by
              SciGen Technologies.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Services and explains how we collect, safeguard and
              disclose information that results from your use of our web pages and software. Please read it carefully.
            </p>
            <p>
              Your access to and use of the Services is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use the Services.
            </p>
            <p>
              By accessing or using the Services you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
            <p>
              SciGen Technologies is the Data Controller for the personal data collected through our Services. We are
              established in the European Union and comply with the General Data Protection Regulation (GDPR).
            </p>
            <p>Our contact information:</p>
            <address className="not-italic">
              SciGen Technologies S.A.
              <br />
              Venizelou 70
              <br />
              Xanthi, 67100
              <br />
              Greece
              <br />
              Phone: +30 25410 63908
              <br />
              Email: info@scigentech.com
            </address>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Personal Data We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number, organization)</li>
              <li>Account information (username, password)</li>
              <li>Usage data (how you interact with our Services)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Content you provide through our Services</li>
              <li>Marketing preferences</li>
            </ul>
            <p>
              We collect this information when you register for an account, use our Services, fill out forms, or
              communicate with us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Contract:</strong> Processing necessary for the performance of a contract with you or to take
                steps at your request before entering into a contract
              </li>
              <li>
                <strong>Consent:</strong> Processing based on your specific, informed, and unambiguous consent
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, provided those
                interests are not overridden by your rights and freedoms
              </li>
              <li>
                <strong>Legal Obligation:</strong> Processing necessary to comply with our legal obligations
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Services</li>
              <li>To notify you about changes to our Services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Services</li>
              <li>To monitor the usage of our Services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>
                To provide you with news, special offers and general information about other goods, services and events
                which we offer
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as is necessary for the purposes set out in this Terms
              & Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our
              legal obligations, resolve disputes, and enforce our policies.
            </p>
            <p>
              Usage data is generally retained for a shorter period, except when this data is used to strengthen the
              security or to improve the functionality of our Services, or we are legally obligated to retain this data
              for longer periods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Data Transfers</h2>
            <p>
              Your information, including personal data, may be transferred to — and maintained on — computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ from those of your jurisdiction.
            </p>
            <p>
              If you are located outside the European Union and choose to provide information to us, please note that we
              transfer the data, including personal data, to Greece (European Union) and process it there.
            </p>
            <p>
              Your consent to this Terms & Privacy Policy followed by your submission of such information represents
              your agreement to that transfer.
            </p>
            <p>
              SciGen Technologies will take all the steps reasonably necessary to ensure that your data is treated
              securely and in accordance with this Terms & Privacy Policy and no transfer of your personal data will
              take place to an organization or a country unless there are adequate controls in place including the
              security of your data and other personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Your Data Protection Rights</h2>
            <p>Under the GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Right to Access:</strong> You have the right to request copies of your personal data.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You have the right to request that we correct any information
                you believe is inaccurate or complete information you believe is incomplete.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under
                certain conditions.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Object to Processing:</strong> You have the right to object to our processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that
                we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us at info@scigentech.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored
              in your web browser and allows the Service or a third-party to recognize you and make your next visit
              easier and the Service more useful to you.
            </p>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
              provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
              our Service is used.
            </p>
            <p>
              These third parties have access to your personal data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose. We have data processing agreements in place
              with all our Service Providers to ensure they comply with GDPR requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate
              to the risk, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of personal data</li>
              <li>
                Ability to ensure ongoing confidentiality, integrity, availability and resilience of processing systems
                and services
              </li>
              <li>
                Ability to restore the availability and access to personal data in a timely manner in the event of a
                physical or technical incident
              </li>
              <li>
                Process for regularly testing, assessing and evaluating the effectiveness of technical and
                organizational measures for ensuring the security of the processing
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Terms & Privacy Policy</h2>
            <p>
              We may update our Terms & Privacy Policy from time to time. We will notify you of any changes by posting
              the new Terms & Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Terms & Privacy Policy periodically for any changes. Changes to this Terms
              & Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p>If you have any questions about this Terms & Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>By email: info@scigentech.com</li>
              <li>By phone: +30 25410 63908</li>
              <li>By mail: Data Protection Officer, SciGen Technologies S.A., Venizelou 70, Xanthi, 67100, Greece</li>
            </ul>
            <p>
              You also have the right to lodge a complaint with a supervisory authority. In Greece, the supervisory
              authority is the Hellenic Data Protection Authority (HDPA).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
