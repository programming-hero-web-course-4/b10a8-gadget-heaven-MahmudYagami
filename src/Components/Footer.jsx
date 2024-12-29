const Footer = () => {
  return (
    <footer className="footer footer-center bg-white text-black p-10">
      <aside>
        <p className="font-bold text-4xl mb-3 ">Gadget Heaven</p>
        <p className="text-lg text-[rgba(9,8,15,0.6)]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </aside>
      <footer className="footer text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
