import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HaiderGhauri",
    icon: <FaGithub size={24} />,
    bgColor: "bg-balck",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/haiderghauri",
    icon: <FaLinkedin size={24} />,
    bgColor: "bg-sky-700",
  },
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/haiderghauri',
  //   icon: <BsTwitterX size={24} />,
  //   bgColor: 'bg-black',
  // },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: <FaEnvelope size={24} />,
    bgColor: "bg-red-600",
  },
];

interface ContactIconsProps {
  showlabel?: boolean;
  className?: string;
}

const ContactIcons = ({ showlabel, className }: ContactIconsProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          target="_blank"
          href={link.href}
          rel="noopener noreferrer"
          key={index}
          className="flex justify-start items-center gap-4"
        >
          <span
            className={`cursor-pointer ${link.bgColor} bg-black p-2 rounded-full hover:opacity-80 hover:scale-103 flex`}
          >
            {link.icon}
          </span>

          {showlabel && (
            <span className="text-sm font-semibold mr-1">{link.label}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default ContactIcons;
