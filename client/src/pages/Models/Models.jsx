import React from "react";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import CategorySection from "./CategorySection";
import TrendingSection from "./TrendingSection";
import ModelFinder from "./ModelFinder";

export const Models = () => {
  const multimodalItems = [
    {
      name: "Audio-Text-to-Text",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/a3961e7544fc63cbdacc7989906cb14dec6922ec?placeholderIfAbsent=true",
    },
    {
      name: "Image-Text-to-Text",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/ced0a68acd3238d0606071122d98b741552d3799?placeholderIfAbsent=true",
    },
    {
      name: "Visual Question Answering",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/d15de5b3b9ab4296ca49366da67415a3b47143d8?placeholderIfAbsent=true",
    },
  ];

  const computerVisionItems = [
    {
      name: "Depth Estimation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/cada4dd2cf044d876465d7a90cf32f43e89451fc?placeholderIfAbsent=true",
    },
    {
      name: "Image Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/56cb743daa69fcab6a34f7dee03abfb53666c780?placeholderIfAbsent=true",
    },
    {
      name: "Object Detection",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/9ce85c687576b9dcc4a1e5dcc2dfdd7431a4956d?placeholderIfAbsent=true",
    },
    {
      name: "Image Segmentation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/bac31ccd74a3c1add379223d01bc9de17b4a7d75?placeholderIfAbsent=true",
    },
    {
      name: "Text-to-Image",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/780e67bf1d9dcbcb6e5a047c48a2234a367b7397?placeholderIfAbsent=true",
    },
    {
      name: "Image-to-Text",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/dbcb68051affc96a3b584dc69ee1e8012c183846?placeholderIfAbsent=true",
    },
    {
      name: "Image-to-Image",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/5c0ae6ca996811a69ecb00e06bc71f324d764548?placeholderIfAbsent=true",
    },
    {
      name: "Image-to-Video",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/dac33363e5a73d9f4282e1dbfc15aa6e4f9246df?placeholderIfAbsent=true",
    },
    {
      name: "Unconditional Image Generation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/7a36cedc29e3ba2effacc473fb8568fbae8e796a?placeholderIfAbsent=true",
    },
    {
      name: "Video Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/70feb4b56050747f87febecd8745904de488b6f2?placeholderIfAbsent=true",
    },
    {
      name: "Text-to-Video",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/2641de518ab5d54f28fc9e0db2102c857cfb31aa?placeholderIfAbsent=true",
    },
    {
      name: "Zero-Shot Image Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/b7e389af72349e86906ca3951dbb980abcaf72af?placeholderIfAbsent=true",
    },
    {
      name: "Mask Generation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/6370aac43308410bbc4906a64c8b9d7579836a82?placeholderIfAbsent=true",
    },
    {
      name: "Zero-Shot Object Detection",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/705257d0aa4f53895ce92df268a73148d0a27419?placeholderIfAbsent=true",
    },
    {
      name: "Text-to-3D",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/f7325bb5193a0502e0fa19f778a267fbb2805cad?placeholderIfAbsent=true",
    },
    {
      name: "Image-to-3D",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/45e8bbdd18a146188dc5dd6e421bfcdf279bd707?placeholderIfAbsent=true",
    },
    {
      name: "Image Feature Extraction",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/7aa4a21528c036dcc9a64e565b6a521296fbfc44?placeholderIfAbsent=true",
    },
    {
      name: "Keypoint Detection",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/cb412f6c2388ccf1519a3e12570a6bd68986c7bf?placeholderIfAbsent=true",
    },
  ];

  const nlpItems = [
    {
      name: "Text Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/6bd2c54e9cd8f2634288eddae2167c41ba83f660?placeholderIfAbsent=true",
    },
    {
      name: "Token Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/162fd1de829a3aeac01da482889ba8fa03265e47?placeholderIfAbsent=true",
    },
    {
      name: "Table Question Answering",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/c609f1a2598e61072bf94cb7cce0b52fd3c73113?placeholderIfAbsent=true",
    },
    {
      name: "Question Answering",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/471986b20340731029137d7933ae6865f1ffcc40?placeholderIfAbsent=true",
    },
    {
      name: "Zero-Shot Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/005479d9b7e334fbd08c7778b11b1dfd5c7ecfff?placeholderIfAbsent=true",
    },
    {
      name: "Translation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/f997ed01e42d3b738310cf91a31e79a057cedb6b?placeholderIfAbsent=true",
    },
    {
      name: "Summarization",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/1b5ec35d2db7cf75af00987f9487404746132b16?placeholderIfAbsent=true",
    },
    {
      name: "Feature Extraction",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/83350ce6d1cef56040be0dbab9d7b702f3d998db?placeholderIfAbsent=true",
    },
    {
      name: "Text Generation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/4c81fc4eaf0fbdca8e7fbe665a637d4851b55c23?placeholderIfAbsent=true",
    },
    {
      name: "Text2Text Generation",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/2e5a1b49b19446931b195447875617030454f7ac?placeholderIfAbsent=true",
    },
    {
      name: "Fill-Mask",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/b2dae4a57f56de0a2c201baebe78dfdc59f2d79f?placeholderIfAbsent=true",
    },
    {
      name: "Sentence Similarity",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/08b4c598d5b0e799c137e932276adaa3a4e4f62d?placeholderIfAbsent=true",
    },
  ];

  const audioItems = [
    {
      name: "Text-to-Speech",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/1a2e266ae904ce235bbdbcc6ea5d22afbed0c7e1?placeholderIfAbsent=true",
    },
    {
      name: "Text-to-Audio",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/c3a4ca8a932a5cf9bc8fa2515ac90e6b183f6243?placeholderIfAbsent=true",
    },
    {
      name: "Automatic Speech Recognition",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/60b9ae99bdc4b9f2e30f51784028ca4befb054e6?placeholderIfAbsent=true",
    },
    {
      name: "Audio-to-Audio",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/feee7819083bb158797c6ec5039f70147f22fe17?placeholderIfAbsent=true",
    },
    {
      name: "Audio Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/049ff56150ff3830046bddc838a864608cfb2e6b?placeholderIfAbsent=true",
    },
    {
      name: "Voice Activity Detection",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/e1ec1a4025c83fbcb6a3842d866d2af0882f5678?placeholderIfAbsent=true",
    },
  ];

  const tabularItems = [
    {
      name: "Tabular Classification",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/4434b24b5596812c08c2533f95bbd7d69156ffc9?placeholderIfAbsent=true",
    },
    {
      name: "Tabular Regression",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/d9eda8382f4c41d6b7cfe0e1fa9050b72b3ba888?placeholderIfAbsent=true",
    },
    {
      name: "Time Series Forecasting",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/98e1ff8b123208333b34981edbb33b146747c8e9?placeholderIfAbsent=true",
    },
  ];

  const reinforcementItems = [
    {
      name: "Reinforcement Learning",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/82cb9ece6d34f6a31d4f79f05676a72c83b46da3?placeholderIfAbsent=true",
    },
    {
      name: "Robotics",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/571b9959bda102811c9daec8ea29bd994625b790?placeholderIfAbsent=true",
    },
  ];

  const otherItems = [
    {
      name: "Graph Machine Learning",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/46c14060ea4c93ffeb996ec6f716d49ef8e0a928?placeholderIfAbsent=true",
    },
  ];

  return (
    <main className="flex flex-wrap gap-3.5 items-start bg-neutral-900 pb-[605px] max-md:pb-24">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/2670da58bcfa6ee0cb2f80a7c1c8303fe9abda31?placeholderIfAbsent=true"
        className="object-contain shrink-0 my-auto aspect-[0.06] w-[73px] max-md:hidden"
        alt=""
      />
      <div className="flex flex-col grow shrink-0 self-start basis-0 bg-neutral-900 w-fit max-md:max-w-full">
        <SearchBar />

        <section className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <aside className="w-[24%] max-md:w-full">
              <div className="flex flex-col items-start px-2.5 pb-2 mx-auto w-full rounded-md bg-neutral-900 max-md:mt-3 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Filter Tasks by name"
                  className="py-5 px-28 text-6xl bg-white border border-[rgba(229,231,235,0.70)] rounded-[33554400px] text-[#99a1af] max-md:pl-5 w-full mb-8"
                />

                <FilterTabs />

                <CategorySection title="Multimodal" items={multimodalItems} />
                <CategorySection
                  title="Computer Vision"
                  items={computerVisionItems}
                />
                <CategorySection
                  title="Natural Language Processing"
                  items={nlpItems}
                />
                <CategorySection title="Audio" items={audioItems} />
                <CategorySection title="Tabular" items={tabularItems} />
                <CategorySection
                  title="Reinforcement Learning"
                  items={reinforcementItems}
                />
                <CategorySection title="Other" items={otherItems} />
              </div>
            </aside>

            <section className="ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="grow mt-[518px] max-md:mt-10 max-md:max-w-full">
                <header className="flex flex-col justify-center items-center px-24 max-md:px-5">
                  <div className="w-full max-w-[1200px]">
                    <div className="flex flex-wrap justify-between items-start py-6">
                      <div className="flex-1 pt-6 pr-6 basis-0 min-w-60">
                        <h1 className="text-4xl font-bold text-gray-50 mb-4">
                          Models
                        </h1>
                        <p className="text-amber-500 leading-6 mb-4">
                          Discover and use thousands of machine learning models,
                          <br />
                          including the most popular diffusion models and LLMs.
                        </p>
                        <button className="flex items-center py-2 px-4 rounded-3xl bg-neutral-800">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/571b9959bda102811c9daec8ea29bd994625b790?placeholderIfAbsent=true"
                            alt=""
                            className="w-[18px] mr-2"
                          />
                          <span className="text-sm font-bold text-white">
                            New Model
                          </span>
                        </button>
                      </div>
                      <div className="w-[280px] min-w-60">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/46c14060ea4c93ffeb996ec6f716d49ef8e0a928?placeholderIfAbsent=true"
                          alt="Kaggle Models"
                          className="w-full aspect-[1.46]"
                        />
                      </div>
                    </div>
                  </div>
                </header>

                <TrendingSection />
                <ModelFinder />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Models;