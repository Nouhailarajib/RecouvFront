
import React from 'react';
import ReglementsList from '@/components/Reglements/ReglementsList';
import { reglements } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reglements = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Gestion des règlements</h1>
        <Button onClick={() => navigate('/reglements/nouveau')}>
          <Plus className="h-4 w-4 mr-2" /> Nouveau règlement
        </Button>
      </div>
      <ReglementsList reglements={reglements} />
    </div>
  );
};

export default Reglements;
