import React from "react";
import Button from "./Button";

const ModelFinder = () => {
  return (
    <section className="flex flex-col justify-center items-center px-80 py-24 w-full max-md:px-5">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <h2 className="text-3xl font-bold text-center text-gray-50 mb-4">
          Didn't find what you were looking for?
        </h2>
        <p className="text-base leading-6 text-center text-gray-50 mb-8">
          Explore models from organizations like Google Research, Deepmind,
          <br />
          and more
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Button variant="large" icon="URL_ORG">
            View all organization models
          </Button>
          <Button variant="large" icon="URL_COMMUNITY">
            View all community models
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelFinder;
