const ContactInfo = () => {
    return (
      <section className="col-[7/10] max-md:col-[span_3]">
        <h2 className="mb-1.5 text-xl font-semibold text-white">Contact Us</h2>
        <div className="mb-6 h-1 bg-orange-400 w-[58px] max-sm:mx-auto max-sm:mt-1.5 max-sm:mb-6" />
        <div className="flex flex-col gap-4 max-sm:items-center">
          <div className="mb-1 text-sm font-semibold text-orange-500 uppercase">
            Location:
          </div>
          <address className="text-lg leading-7 no-underline text-neutral-200 not-italic">
            <span>1200 E California Blvd,</span>
            <br />
            <span>Pasadena, CA 91125</span>
          </address>
          <div className="mb-1 text-sm font-semibold text-orange-500 uppercase">
            Questions:
          </div>
          <a
            href="mailto:hacktech@caltech.edu"
            className="text-lg leading-7 no-underline text-neutral-200 hover:text-orange-400"
          >
            hacktech@caltech.edu
          </a>
        </div>
      </section>
    );
  };

export default ContactInfo;