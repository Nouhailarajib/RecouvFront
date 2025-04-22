
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientForm from '@/components/Clients/ClientForm';

const NouveauClient = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: any) => {
    console.log('Données du nouveau client:', data);
    // Dans une application réelle, vous enregistreriez les données dans une base de données
    navigate('/clients');
  };
  
  const handleCancel = () => {
    navigate('/clients');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Nouveau client</h1>
      
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Informations du client</CardTitle>
        </CardHeader>
        <CardContent>
          <ClientForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NouveauClient;
