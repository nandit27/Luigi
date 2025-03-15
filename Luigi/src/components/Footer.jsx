import UsefulLinks from "./UsefulLinks";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-24 w-full bg-black">
      <div className="grid relative gap-8 px-5 py-0 mx-auto mb-24 w-full grid-cols-[repeat(12,1fr)] max-w-[1140px] max-md:gap-5 max-md:grid-cols-[repeat(6,1fr)] max-md:max-w-[991px] max-sm:gap-10 max-sm:max-w-screen-sm max-sm:text-center max-sm:grid-cols-[1fr]">
        <div className="col-[span_3] max-md:col-[span_3]">
        </div>
        <UsefulLinks />
        <ContactInfo />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
