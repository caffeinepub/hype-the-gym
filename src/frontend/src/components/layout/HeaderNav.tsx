import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { businessInfo } from '@/content/business';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Membership', path: '/membership' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate({ to: path });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="h-7 w-7 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {businessInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => navigate({ to: '/membership' })}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-left text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('/membership')}
                className="mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Join Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
