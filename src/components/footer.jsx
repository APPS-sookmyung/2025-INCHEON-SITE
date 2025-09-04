import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-neutral-300 bg-[#D0CDC4] py-10 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} 점점 (Demo). All rights reserved.
    </footer>
  );
};

export default Footer;