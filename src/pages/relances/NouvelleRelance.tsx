
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RelanceForm from '@/components/Relances/RelanceForm';

const NouvelleRelance = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Données de la nouvelle relance:', data);
    // Dans une application réelle, vous enregistreriez les données dans une base de données
    navigate('/relances');
  };
  
  const handleCancel = () => {
    navigate('/relances');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Nouvelle relance</h1>
      
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Informations de la relance</CardTitle>
        </CardHeader>
        <CardContent>
          <RelanceForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NouvelleRelance;
