import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Home, 
  MessageSquare, 
  Package, 
  Settings, 
  ShoppingBag, 
  Users, 
  Video, 
  Wallet, 
  BarChart3, 
  Gift, 
  LogOut,
  Menu,
  X,
  User,
  Users2,
  LayoutDashboard,
  Radio
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMobile } from '@/hooks/useMobile';

export function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation links based on user role
  const getNavLinks = () => {
    if (user?.role === 'admin') {
      return [
        { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { href: '/admin/readers', label: 'Readers', icon: <Users className="h-5 w-5" /> },
        { href: '/admin/clients', label: 'Clients', icon: <Users2 className="h-5 w-5" /> },
        { href: '/admin/sessions', label: 'Sessions', icon: <Calendar className="h-5 w-5" /> },
        { href: '/admin/finances', label: 'Finances', icon: <BarChart3 className="h-5 w-5" /> },
        { href: '/admin/shop', label: 'Shop', icon: <ShoppingBag className="h-5 w-5" /> },
      ];
    } else if (user?.role === 'reader') {
      return [
        { href: '/reader', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { href: '/reader/profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
        { href: '/reader/calendar', label: 'Calendar', icon: <Calendar className="h-5 w-5" /> },
        { href: '/reader/sessions', label: 'Sessions', icon: <Video className="h-5 w-5" /> },
        { href: '/reader/messages', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
        { href: '/reader/livestream', label: 'Livestream', icon: <Radio className="h-5 w-5" /> },
        { href: '/reader/earnings', label: 'Earnings', icon: <Wallet className="h-5 w-5" /> },
      ];
    } else {
      return [
        { href: '/client', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
        { href: '/client/readers', label: 'Readers', icon: <Users className="h-5 w-5" /> },
        { href: '/client/book', label: 'Book Reading', icon: <Calendar className="h-5 w-5" /> },
        { href: '/client/sessions', label: 'My Sessions', icon: <Video className="h-5 w-5" /> },
        { href: '/client/messages', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
        { href: '/client/livestreams', label: 'Livestreams', icon: <Radio className="h-5 w-5" /> },
        { href: '/client/wallet', label: 'Wallet', icon: <Wallet className="h-5 w-5" /> },
        { href: '/client/orders', label: 'My Orders', icon: <Package className="h-5 w-5" /> },
        { href: '/shop', label: 'Shop', icon: <ShoppingBag className="h-5 w-5" /> },
        { href: '/community', label: 'Community', icon: <BookOpen className="h-5 w-5" /> },
      ];
    }
  };

  const navLinks = getNavLinks();

  if (isMobile && !isOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-20 z-40"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <>
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 z-30 bg-black/50 transition-opacity",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={toggleSidebar}
        />
      )}
      
      <div
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-border bg-background/95 backdrop-blur transition-transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
        
        <div className="flex h-full flex-col">
          <div className="p-4">
            <h2 className="font-alexBrush text-2xl text-primary">SoulSeer</h2>
          </div>
          
          <ScrollArea className="flex-1 px-3 py-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => isMobile && setIsOpen(false)}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {link.icon}
                  <span className="ml-3">{link.label}</span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
          
          <div className="border-t border-border p-4">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            
            <div className="mt-4 text-center">
              <Link to="/settings">
                <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}