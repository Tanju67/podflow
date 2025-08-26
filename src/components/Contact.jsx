import AnotherPageHeader from "./AnotherPageHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div>
      <AnotherPageHeader title="Contact Us" />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
