import Menu from "../../components/Menu";

const Footer = () => {

  const links = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Productos',
      href: '/store'
    },
    {
      label: 'Contacto',
      href: '/contacto'
    },
  ];

  return(
      <footer>
        <section className="container">
            <nav className="navbar">
              <Menu className="navbar" links={links} />
            </nav>
        </section>
        <p className="copy">Sensaciones Essen- Todos los derechos reservados &copy;</p>
    </footer>
  );
};

export default Footer;