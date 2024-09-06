"use client";

import React from "react";
import { Accordion } from "./Accordion";

type FaqProps = {};

export const Faq: React.FC<FaqProps> = () => {
  return (
    <section id="faq" className="px-3 md:px-0">
      <Accordion
        title={
          <span className="text-xl">What does 1 TB/month deployment mean?</span>
        }
        answer={
          <>
            <p className="mt-6">
              {`Imagine being able to send up to 1 terabyte (1,000 gigabytes) of content to your visitors each month. That’s what 1 TB/month deployment means.`}
            </p>
            <p>Real Example:</p>
            <ul className="list-disc list-outside ml-5">
              <li>
                Content: Text, images, CSS, JavaScript, and some embedded
                videos.
              </li>
              <li>Average weight per page: 4 MB.</li>
              <li>Available bandwidth: 1 TB (1,000 GB) = 1,000,000 MB.</li>
              <li>Possible page views: 1,000,000 MB / 4 MB = 250,000 views.</li>
            </ul>
            <p>
              If each visitor views, on average, 2 pages, you could receive up
              to 125,000 visitors a month without worrying about exceeding your
              limit.
            </p>
            <p>
              Remember, if you exceed this limit, an additional fee will apply.
              Our development team will ensure you maximize your bandwidth
              usage!
            </p>
          </>
        }
      />
      <Accordion
        title={<span className="text-xl">How does UI refresh work?</span>}
        answer={
          <>
            <p className="mt-5">
              {`The user interface (UI) refresh is an essential process to keep your application or website updated and responsive. Here’s how it works and why it’s important for you:`}
            </p>
            <ol className="list-decimal list-outside ml-4">
              <li>
                <span className="font-bold">
                  Smooth and Interactive User Experience:
                </span>
                <br />
                The periodic UI refresh offers an exceptional user experience.
                This technology allows for smooth navigation and real-time
                interactivity. The system acts predictively, anticipating user
                needs. Each interaction is optimized for greater satisfaction,
                transforming conventional browsing into an advanced digital
                experience. The result is a highly efficient and attractive
                interface that significantly enhances user interaction with the
                application.
              </li>
            </ol>
            <p>
              In summary, the UI refresh is a technique that ensures your
              application or website is always up to date, providing a superior
              user experience and keeping your visitors engaged and satisfied.
            </p>
          </>
        }
      />
      <Accordion
        title={
          <span className="text-xl">
            What is AI Chat and how does it benefit my business?
          </span>
        }
        answer={
          <>
            <p className="mt-6">
              {`AI Chat is an advanced artificial intelligence tool that enables automated and real-time interaction with your customers via chat. Here’s how it works and the benefits it can bring to your business:`}
            </p>
            <ol className="list-decimal list-outside ml-4">
              <li>
                <span className="font-bold">24/7 Customer Support:</span> With
                AI Chat, your customers can get immediate answers to their
                questions at any time of the day, significantly improving
                customer satisfaction.
              </li>
              <li>
                <span className="font-bold">Increased Efficiency:</span>
                Automates repetitive tasks like answering frequently asked
                questions, managing appointments, or processing orders, allowing
                your team to focus on more strategic tasks.
              </li>
              <li>
                <span className="font-bold">Personalized Experience:</span> AI
                Chat can analyze customer interactions and offer personalized
                recommendations, increasing the likelihood of conversion and
                loyalty.
              </li>
              <li>
                <span className="font-bold">Cost Reduction:</span> By automating
                customer support, you can reduce operational costs associated
                with hiring and training additional staff, without compromising
                service quality.
              </li>
              <li>
                <span className="font-bold">Easy Integration:</span> It can be
                easily integrated with your website, social media, and other
                communication platforms, ensuring a consistent and seamless
                experience for your customers.
              </li>
            </ol>
            <p>
              In summary, AI Chat not only improves customer support and
              operational efficiency but also offers a personalized experience.
              Implementing this technology can make a significant difference in
              customer satisfaction and the growth of your business.
            </p>
          </>
        }
      />
    </section>
  );
};
