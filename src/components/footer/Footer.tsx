import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div
        className="flex justify-center bg-Primary text-Secundary"
        style={{ fontFamily: "Share Tech Mono, sans-serif" }}
      >
        <div className="container flex justify-between items-center py-2">
          <p className="text-xl font-none">//blog-pessoal-generation </p>
          <p className="text-lg">Acesse-nossas-redes-sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={28} />
            <InstagramLogo size={28} />
            <FacebookLogo size={28} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
