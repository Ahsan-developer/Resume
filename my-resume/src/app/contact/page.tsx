import React from "react";

export default function ContactPage() {
  return (
    <section id="contact" className=" bg-c1">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="text-left">
            <h2 className=" font-bold text-4xl mb-[3rem]">
              Let's get in touch
            </h2>
            <p className=" text-[1.3125rem] mb-[3rem]">
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </p>
            <h3 className=" font-bold text-[1.3125rem] mb-[.5rem]">
              Living In:
            </h3>
            <address className="mb-[1rem] text-[1.125rem]">
              House 199-A, street 42, sector G-6/1-3, Islamabad, Pakistan
            </address>
            <h3 className=" font-bold text-[1.3125rem] mb-[.5rem]">Call:</h3>
            <p className="mb-[1rem] text-[1.125rem]">
              <a href="tel:+923040553943">(+92) 304 055 3943</a>
            </p>
            <ul className="">
              <li className="social-icons-twitter">
                <a
                  href="https://twitter.com/harnishdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons-facebook">
                <a
                  href="http://www.facebook.com/harnishdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social-icons-instagram">
                <a
                  href="http://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="social-icons-github">
                <a
                  href="http://www.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons-dribbble">
                <a
                  href="http://www.dribbble.com/harnishdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-right">
            <h2 className=" font-bold text-4xl mb-[3rem]">
              Estimate your Project?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
