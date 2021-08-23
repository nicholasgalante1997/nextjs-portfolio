import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
               <b className="text-white">Phone Number:</b>
               {' '}(516) 317-0684
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <b className="text-white">Email:</b>
                {' '}
                <a href="mailto:nicholasgalante1997@gmail.com">
                  nicholasgalante1997@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
               <b className="text-white">LinkedIn:</b>
               <a href={userData.socialLinks.linkedin}>
                 {' '}Click Me ={'>'}
                </a>
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Medium Publications
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <a
                  href="https://nicholasgalante1997.medium.com/asynchronous-angular-moving-from-react-to-angular-with-async-await-6e332d7b9a8d"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Asynchronous Angular; Moving from React to Angular, With Async/Await
                </a>{" "}
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <a
                  href="https://nicholasgalante1997.medium.com/javascript-the-case-for-the-switch-statement-8a50d5e32b64"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Javascript; The Case for the Switch Statement
                </a>{" "}
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <a
                  href="https://nicholasgalante1997.medium.com/react-router-dom-section-one-routerbrowser-route-switch-link-59c216ccca37"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                 React Router Dom; Section One; RouterBrowser, Route, Switch, Link
                </a>{" "}
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <a
                  href="https://nicholasgalante1997.medium.com/programming-a-search-bar-in-react-js-a-ui-for-the-generation-that-has-no-clue-what-it-wants-2891fd980c47"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                 Programming A Search Bar in React.js; A UI For the Generation That Has No Clue What it Wants
                </a>{" "}
              </p>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <a
                  href="https://blog.devgenius.io/building-associations-in-object-oriented-ruby-letting-common-sense-make-sense-e7ab3d357886"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                Building Associations in Object Oriented Ruby; Letting Common Sense Make Sense
                </a>{" "}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              The Tech I Love and Know
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
               <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://blog.mwpreston.net/wp-content/uploads/2018/09/ruby-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://react-query.tanstack.com/_next/static/images/emblem-light-5d1cdce6c8bbb006ac6cefb8e1642877.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="data:image/png;base64,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"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://pbs.twimg.com/profile_images/1278691829135876097/I4HKOLJw.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://material-ui.com/static/logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
