// src/components/Layout/AppBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const AppBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-primary"></h1>
        </Link>
      </div>


      <div className="flex items-center gap-4">
  
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive" />
        </Button>

      
        <Link
          to="/profile"
          title="Voir mon profil"
          className="flex items-center gap-2 rounded-md p-1 hover:bg-muted transition"
        >
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              <UserCircle className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-sm font-medium">Admin</span>
            <span className="text-xs text-muted-foreground">
              admin@debtflow.fr
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default AppBar;
