
import React from 'react';
import RelancesList from '@/components/Relances/RelancesList';
import { relances } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Relances = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Gestion des relances</h1>
        <Button onClick={() => navigate('/relances/nouveau')}>
          <Plus className="h-4 w-4 mr-2" /> Nouvelle relance
        </Button>
      </div>
      <RelancesList relances={relances} />
    </div>
  );
};

export default Relances;
