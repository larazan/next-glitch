import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const privacy = () => {

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="bg-splatter-x relative py-12">
          <article className="max-w-3xl mx-auto relative z-10 py-8 px-4 markdown">
            <div className="bg-rain h-full w-8 hidden md:block absolute top-0 left-0 -ml-16 mt-8"></div>{" "}
            <h1 className="text-3xl font-mabryblack">Privacy Policy</h1>{" "}
            <p className="py-4 leading-tight text-pink-400 font-mabryitalic text-2xl">
              Last updated on November 1, 2022.
            </p>{" "}
            <h2 className="font-mabrybold text-lg">Overview</h2>{" "}
            <p className="py-2 font-mabry">
              We strongly support your right to privacy when using our software
              and services. Our privacy policy is as simple as they come:{" "}
              <strong>your data is none of our business.</strong> We earn a
              living by selling software, not by mining or selling your
              personal&nbsp;information.
            </p>{" "}
            <p className="py-2 font-mabry">
              To the extend that our products and services can provide their
              functionality without doing so, we prefer to avoid collecting data
              from&nbsp;you.
            </p>{" "}
            <p className="py-2 font-mabry">
              The rest of this policy details what do we track and/or store, how
              that data is used, and what you can do to opt out and exercise
              your rights via GDPR or other similar&nbsp;regulations.
            </p>{" "}
            <p className="py-2 font-mabry">
              We use modern security measures to protect collected data, and
              limit access to only those employees who require access to perform
              their jobs. We may be legally required to disclose collected data
              to law enforcement or government agencies in some&nbsp;situations.
            </p>{" "}
            <p className="py-2 font-mabry">
              By creating an account on statamic.com, downloading the Statamic
              application, addons, or starter kits, you agree to the collection
              and use of information in accordance with this&nbsp;policy.
            </p>{" "}
            <h2 className="font-mabrybold text-lg">Information We&nbsp;Collect</h2>{" "}
            <p className="py-2 font-mabry">
              <strong>User-Provided Information</strong>: You provide us
              information about yourself, such as your name, e-mail address, and
              other personally identifiable information (all referred to as
              “Personal Information”) if you register for a User account with
              the Service. If you correspond with us by email, we may retain the
              content of your email messages, your email address and our
              responses. We may also retain any messages you send through the
              Service. You may provide us information in user content, such as
              your public profile and comments that you post to
              the&nbsp;Service.
            </p>{" "}
            <p className="py-2 font-mabry">
              <strong>Passive and Programmatic Collection:</strong> Third party
              services (detailed below), our licensing server, and/or cookies
              may collect additional information, including IP Address, browser
              type, browser version, pages of our site you visit, the time and
              date of your visit, time spent on those pages, and other
              diagnostic&nbsp;data.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">How We Use Your&nbsp;Information</h2>{" "}
            <p className="py-2 font-mabry">
              We only use your data to improve our products and services, notify
              you of changes to our service, to detect, prevent, and address
              technical issues, and to provide you with news and general
              information about our products and&nbsp;services.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Sharing Your&nbsp;Information</h2>{" "}
            <p className="py-2 font-mabry">
              <strong>
                We will never, ever resell your data to 3rd&nbsp;parties.
              </strong>
            </p>{" "}
            <p className="py-2 font-mabry">
              Sometimes customer information is shared with third parties in
              order to provide the product or service you are requesting; for
              example, we share information with Stripe (payment processing),
              Intercom (technical support), and Marketplace Sellers (if you
              purchased or acquired their addon or theme). We minimize the
              sharing of your personal information to as little data
              as&nbsp;necessary.
            </p>{" "}
            <p className="py-2 font-mabry">
              We will always ask for your consent before sharing your personal
              information with third parties for purposes other than those set
              forth&nbsp;herein.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Security of your Personal&nbsp;Data</h2>{" "}
            <p className="py-2 font-mabry">
              We follow industry standards on information security management
              for personal information we collect and store. No method of
              transmission over the Internet, or method of electronic storage,
              is 100% secure. While we strive to use all possible means to
              protect your personal data, no one can guarantee its
              absolute&nbsp;security.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Third-Party Vendor&nbsp;Services</h2>{" "}
            <p className="py-2 font-mabry">
              We are unable to control what any third party does with your
              personal information. Third parties will usually have their own
              privacy policies for personal information we provide them, and we
              recommend that you read their privacy policies so that you can
              understand the manner in which your personal information will be
              handled by these third parties. Some third parties are located in
              different jurisdictions than either you or us and thus your
              personal information and the protection thereof may become subject
              to the laws of such jurisdiction in which that third party
              is&nbsp;located.
            </p>{" "}
            <p className="py-2 font-mabrybold text-lg">
              <strong>We use the following third party&nbsp;services:</strong>
            </p>{" "}
            <ul className="list-disc font-mabry">
              <li>
                Credit card processing for purchases from our website is
                provided by&nbsp;<a href="https://stripe.com">Stripe</a>.
              </li>{" "}
              <li>
                Collection and aggregation of usage analytics and crash logs is
                provided by&nbsp;<a href="https://sentry.io">Sentry</a>.
              </li>{" "}
              <li>
                Transactional Emails are delivered by&nbsp;
                <a href="https://postmarkapp.com/">Postmark</a>
              </li>{" "}
              <li>
                Email newsletter services are provided by&nbsp;
                <a href="https://mailcoach.app/">Mailcoach</a>
              </li>{" "}
              <li>
                Customer Support and email correspondence is provided by&nbsp;
                <a href="https://helpscout.com">HelpScout</a>.
              </li>{" "}
              <li>
                Privacy-first web analytics are provided by&nbsp;
                <a href="https://usefathom.com/ref/LTCAO6">Fathom</a>.
              </li>{" "}
              <li>
                Spam prevention is provided by&nbsp;
                <a href="https://akismet.com/">Akismet</a>
              </li>{" "}
              <li>
                Bot detection is provided by{" "}
                <a href="https://www.google.com/recaptcha/">
                  Google&nbsp;Recaptcha
                </a>
              </li>{" "}
              <li>
                We use <a href="https://basecamp.com">Basecamp</a> and{" "}
                <a href="https://slack.com">Slack</a> as internal communication
                tools. Customer names and email addresses may pass through these
                services as support processes&nbsp;occur.
              </li>
            </ul>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Backed-up&nbsp;Data</h2>{" "}
            <p className="py-2 font-mabry">
              As you might expect, we keep backups of company data so that a
              catastrophic data loss event doesn’t put us out of business.
              Although collected personal data expires from our “active” data
              set according to the schedules mentioned above, it may persist in
              backups for up to 6 months. Backups are only accessible to
              specially privileged employees who perform system administration
              tasks. We consider the backups “cold storage” and we don’t pull
              data from them unless a significant data loss event
              has&nbsp;occurred.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Cookies</h2>{" "}
            <p className="py-2 font-mabry">We use cookies for the following&nbsp;purposes:</p>{" "}
            <ul className="list-disc font-mabry">
              <li>To enable essential functions of the&nbsp;Service</li>{" "}
              <li>To prevent bots and&nbsp;spam</li>{" "}
              <li>To store your&nbsp;preferences</li>
            </ul>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Rights of EU Citizens Under&nbsp;GDPR</h2>{" "}
            <p className="py-2 font-mabry">
              Citizens of the EU may exercise their rights under the General
              Data Protection Regulation, such as the rights of access and
              erasure, by contacting us with their request. We recommend
              emailing the request to&nbsp;
              <a href="mailto:gdpr@statamic.com">gdpr@statamic.com</a>.
            </p>{" "}
            <p className="py-2 font-mabry">
              At said request, we will delete all personal information we use
              about you for marketing or product development purposes, except
              those required by&nbsp;law.
            </p>{" "}
            <p className="py-2 font-mabry">
              Please note that as we are located in the United States, when you
              provide us with your Personal Information we will process it in
              countries outside the European Economic Area (“EEA”), such as the
              United States, which may not provide the same level of data
              protection as in your jurisdiction. This is necessary in order to
              perform our services. Regardless of where your personal
              information is located, we will adopt measures to protect your
              Personal Information as set out&nbsp;below.
            </p>{" "}
            <p className="py-2 font-mabry">
              Please also be aware that there is nothing we can do to make your
              Statamic installation 100% compliant. It is impossible, however
              unfortunate, for self-hosted software to do that on your behalf.
              We are more than happy to explore what features you need, as a
              developer community, to help with compliance, make your lives
              easier, and improve them over&nbsp;time.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Promotion of Statamic&nbsp;Installs</h2>{" "}
            <p className="py-2 font-mabry">
              <strong>
                We do not use the Statamic licensing server when deciding what
                sites to&nbsp;promote.
              </strong>
            </p>{" "}
            <p className="py-2 font-mabry">
              If your site is publicly identifiable as running on Statamic, we
              may use it to showcase what is possible with Statamic. For
              example, if you have promoted it on social media, website design
              galleries, or 3rd Party tools like Builtwith (which identifies the
              site using the HTML “Powered By” Header enabled by default) can
              identify the site as running on Statamic. You can disable the
              “Powered By” header in your system settings if you wish to keep
              your platform of choice&nbsp;private.
            </p>{" "}
            <p className="py-2 font-mabry">
              We will remove any promotional use of your site or brand logo at
              your request. Just email us at&nbsp;
              <a href="mailto:support@statamic.com">support@statamic.com</a>.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Limited&nbsp;Liability</h2>{" "}
            <p className="py-2 font-mabry">
              We are not liable for anything you do with our products, services,
              or information on websites and social media accounts. What you
              build with Statamic is up to&nbsp;you.
            </p>{" "}
            <h2 className="pt-2 font-mabrybold text-lg">Questions and&nbsp;Feedback</h2>{" "}
            <p className="py-2 font-mabry">
              Our privacy policies might change or be edited for clarity over
              time. Up-to-date information will always be available from
              this&nbsp;page.
            </p>{" "}
            <p className="py-2 font-mabry">
              Please <a href="mailto:support@statamic.com">contact us</a> if you
              have any questions about our data collection or privacy policies.
              We’ll be more than happy to discuss them with&nbsp;you.
            </p>
          </article>
        </div>
        <Footer />
      </>
    );
};

export default privacy;