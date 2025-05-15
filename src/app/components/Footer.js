import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Tutorials", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-purple-600">
              SoftSell
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Turning unused software into cash for businesses worldwide.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
