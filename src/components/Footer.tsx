import React from 'react';
import { Link } from 'react-router-dom';
import {
  FcHome, FcConferenceCall, FcFeedback, FcCamcorderPro, FcOldTimeCamera,
  FcClapperboard, FcCustomerSupport, FcAutomatic
} from 'react-icons/fc';

interface FooterProps {
  sidebarOpen: boolean;
}

const Footer: React.FC<FooterProps> = ({ sidebarOpen }) => {
  const FooterCommunityGroup = [
    { name: "Dashboard", link: "/", icon: FcHome },
    { name: "Friends", link: "/ErrorPage", icon: FcConferenceCall },
    { name: "Messages", link: "/", icon: FcFeedback }
  ];

  const FooterDebateGroup = [
    { name: "Start Debate", link: "/", icon: FcCamcorderPro },
    { name: "Join Debate", link: "/", icon: FcOldTimeCamera },
    { name: "Previous Debates", link: "/", icon: FcClapperboard }
  ];

  const FooterProblemGroup = [
    { name: "Help", link: "/", icon: FcCustomerSupport },
    { name: "Setting", link: "/", icon: FcAutomatic }
  ];

  const FooterLegalGroup = [
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Legal", link: "/legal" },
    { name: "Privacy Policy", link: "/privacy-policy" }
  ];

  const createColumns = (links: Array<{ name: string; link: string; icon?: React.ElementType }>, itemsPerColumn: number) => {
    const columns = [];
    for (let i = 0; i < links.length; i += itemsPerColumn) {
      columns.push(links.slice(i, i + itemsPerColumn));
    }
    return columns;
  };

  const FooterCommunityColumns = createColumns(FooterCommunityGroup, 3);
  const FooterDebateColumns = createColumns(FooterDebateGroup, 3);
  const FooterProblemColumns = createColumns(FooterProblemGroup, 2);
  const FooterLegalColumns = createColumns(FooterLegalGroup, 3);

  return (
    <footer
      className={`bg-gray-800 text-white py-4 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'pl-56' : 'pl-16'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Dashboard & Communication Links */}
          <div aria-labelledby="footer-community">
            <h3 id="footer-community" className="text-lg font-semibold mb-4">Community</h3>
            <div className="flex flex-col gap-2">
              {FooterCommunityColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-2">
                  {column.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.link}
                      className="flex items-center text-white hover:text-gray-400 space-x-2"
                      aria-label={link.name}
                    >
                      {link.icon && React.createElement(link.icon, { size: "20" })}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Debate Management Links */}
          <div aria-labelledby="footer-debate">
            <h3 id="footer-debate" className="text-lg font-semibold mb-4">Debate</h3>
            <div className="flex flex-col gap-2">
              {FooterDebateColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-2">
                  {column.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.link}
                      className="flex items-center text-white hover:text-gray-400 space-x-2"
                      aria-label={link.name}
                    >
                      {link.icon && React.createElement(link.icon, { size: "20" })}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Support & Settings Links */}
          <div aria-labelledby="footer-support">
            <h3 id="footer-support" className="text-lg font-semibold mb-4">Problem ?</h3>
            <div className="flex flex-col gap-2">
              {FooterProblemColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-2">
                  {column.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.link}
                      className="flex items-center text-white hover:text-gray-400 space-x-2"
                      aria-label={link.name}
                    >
                      {link.icon && React.createElement(link.icon, { size: "20" })}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legal Information Links */}
          <div aria-labelledby="footer-legal">
            <h3 id="footer-legal" className="text-lg font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              {FooterLegalColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-2">
                  {column.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.link}
                      className="text-white hover:text-gray-400"
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 pt-4 text-center text-sm mt-6">
        <p className="text-center mx-4 sm:mx-0" aria-live="polite">&copy; {new Date().getFullYear()} Debate Me. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
