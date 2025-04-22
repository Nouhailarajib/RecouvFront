
import React from 'react';
import CreancesList from '@/components/Creances/CreancesList';
import { creances } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Creances = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Gestion des créances</h1>
        <Button onClick={() => navigate('/creances/nouveau')}>
          <Plus className="h-4 w-4 mr-2" /> Nouvelle créance
        </Button>
      </div>
      <CreancesList creances={creances} />
    </div>
  );
};

export default Creances;
