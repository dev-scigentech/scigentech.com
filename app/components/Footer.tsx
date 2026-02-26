'use client';

import type React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle anchor links on the homepage
    if (pathname !== '/' && !href.startsWith('/#')) return;

    const targetId = href.replace('/#', '');
    if (!targetId) return;

    e.preventDefault();

    // If we're not on the homepage, navigate to homepage first
    if (pathname !== '/') {
      window.location.href = href;
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header height
        behavior: 'smooth',
      });
    }
  };

  // Scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();

    // If not on homepage, go to homepage
    if (pathname !== '/') {
      window.location.href = '/';
      return;
    }

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Solutions', href: '/#work' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Terms & Privacy', href: '/terms' },
  ];

  return (
    <footer className='bg-background border-t border-border'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <div className='flex justify-center mb-8'>
          <a href='/' onClick={scrollToTop} className='flex items-center'>
            <Image
              src='/images/scigen-logo.png'
              alt='SciGen Technologies Logo'
              width={160}
              height={45}
              className='h-9 w-auto'
            />
          </a>
        </div>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {footerLinks.map((item) => (
            <div key={item.name} className='pb-6'>
              <a
                href={item.href}
                onClick={(e) =>
                  item.href.includes('#') && handleAnchorClick(e, item.href)
                }
                className='text-sm leading-6 text-muted-foreground hover:text-foreground'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-8 text-center text-sm text-muted-foreground'>
          <p>Venizelou 70, Xanthi, 67100, Greece</p>
          <p>Phone: +30 25410 63908 | Email: info@scigentech.com</p>
          <p>SCΙGEN TECHNΟLΟGΙES Α.Ε. | Αριθμός Γ.Ε.ΜΗ: 12705046000</p>
        </div>
        <p className='mt-6 text-center text-sm leading-5 text-muted-foreground'>
          &copy; {new Date().getFullYear()} SciGen Technologies. All rights
          reserved. Advancing science through technology.
        </p>
      </div>
    </footer>
  );
}
