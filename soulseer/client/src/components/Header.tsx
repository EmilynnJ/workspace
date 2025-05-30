import { Link } from "react-router-dom";
import { Bell, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { getNotifications } from "@/api/notifications";
import { Notification } from "@/api/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMobile } from "@/hooks/useMobile";
import { useToast } from "@/hooks/useToast";

export function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { user } = useAuth();
  const isMobile = useMobile();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotifications();
        if (response.success) {
          setNotifications(response.data.notifications);
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to fetch notifications",
          variant: "destructive",
        });
      }
    };

    fetchNotifications();
  }, [toast]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <h1 className="font-alexBrush text-2xl text-primary animate-glow">
              SoulSeer
            </h1>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-2 font-semibold">
                <span>Notifications</span>
                {notifications.length > 0 && (
                  <Button variant="ghost" size="sm">
                    Mark all as read
                  </Button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="p-4 text-center text-muted-foreground">
                    No notifications yet
                  </p>
                ) : (
                  notifications.map((notification) => (
                    <DropdownMenuItem key={notification._id} className="cursor-pointer">
                      <Link
                        to={notification.link || "#"}
                        className="flex w-full flex-col py-1"
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-medium">{notification.title}</span>
                          <span className="ml-2 text-xs text-muted-foreground">
                            {new Date(notification.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.content}
                        </p>
                      </Link>
                    </DropdownMenuItem>
                  ))
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}