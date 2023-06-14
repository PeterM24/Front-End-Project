import "../styles/Footer.css"

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return <footer>{`© Designed by Peter Matthews ${year}`}</footer>;
};

export default Footer;
