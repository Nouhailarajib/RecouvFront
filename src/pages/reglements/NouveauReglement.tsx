
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReglementForm from '@/components/Reglements/ReglementForm';

const NouveauReglement = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Données du nouveau règlement:', data);
    // Dans une application réelle, vous enregistreriez les données dans une base de données
    navigate('/reglements');
  };
  
  const handleCancel = () => {
    navigate('/reglements');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Nouveau règlement</h1>
      
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Informations du règlement</CardTitle>
        </CardHeader>
        <CardContent>
          <ReglementForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NouveauReglement;
