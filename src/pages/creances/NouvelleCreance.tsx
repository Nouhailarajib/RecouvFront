
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CreanceForm from '@/components/Creances/CreanceForm';

const NouvelleCreance = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Données de la nouvelle créance:', data);
    // Dans une application réelle, vous enregistreriez les données dans une base de données
    navigate('/creances');
  };
  
  const handleCancel = () => {
    navigate('/creances');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Nouvelle créance</h1>
      
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Informations de la créance</CardTitle>
        </CardHeader>
        <CardContent>
          <CreanceForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NouvelleCreance;
