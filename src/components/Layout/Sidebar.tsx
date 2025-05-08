
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart, 
  ClipboardList, 
  CreditCard, 
  Mail,
  Users,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { 
    title: 'Dashboard', 
    icon: <BarChart className="h-5 w-5" />, 
    path: '/' 
  },
  { 
    title: 'Créances', 
    icon: <ClipboardList className="h-5 w-5" />, 
    path: '/creances' 
  },
  { 
    title: 'Règlements', 
    icon: <CreditCard className="h-5 w-5" />, 
    path: '/reglements' 
  },
  { 
    title: 'Relances', 
    icon: <Mail className="h-5 w-5" />, 
    path: '/relances' 
  },
  { 
    title: 'Clients', 
    icon: <Users className="h-5 w-5" />, 
    path: '/clients' 
  }
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={cn(
      "group fixed inset-y-0 flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between h-16 px-3 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">ReCouvTech</span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "text-sidebar-foreground ml-auto",
            collapsed && "mx-auto"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? ">" : "<"}
        </Button>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-2 py-2 rounded-md transition-colors",
              location.pathname === item.path 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            {item.icon}
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col p-3 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className={cn(
            "flex items-center gap-3 w-full justify-start mb-2",
            collapsed && "justify-center"
          )}
        >
          <Settings className="h-5 w-5" />
          {!collapsed && <span>Paramètres</span>}
        </Button>
        <Button 
          variant="ghost" 
          className={cn(
            "flex items-center gap-3 w-full justify-start",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Déconnexion</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
