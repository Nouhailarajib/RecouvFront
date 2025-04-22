
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { reglements, creances } from '@/data/mockData';

const DetailsReglement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const reglement = reglements.find(r => r.id === id);
  const creance = creances.find(c => reglement?.numeroFacture === c.numeroFacture);
  
  if (!reglement || !creance) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Règlement non trouvé</h2>
        <Button className="mt-4" onClick={() => navigate('/reglements')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour aux règlements
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Détails du règlement</h1>
        <Button variant="outline" onClick={() => navigate('/reglements')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
      </div>
      
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Règlement du {reglement.dateReglement}</CardTitle>
          <Button size="sm" onClick={() => navigate(`/creances/${creance.id}`)}>
            <FileText className="h-4 w-4 mr-2" /> Voir la créance
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Informations du règlement</h3>
              <div className="space-y-1">
                <p><span className="font-medium">Montant:</span> {reglement.montantEncaisse} €</p>
                <p><span className="font-medium">Date:</span> {reglement.dateReglement}</p>
                <p><span className="font-medium">Mode de paiement:</span> {reglement.modePaiement}</p>
                <p><span className="font-medium">Référence:</span> {reglement.reference || '-'}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Informations de la créance</h3>
              <div className="space-y-1">
                <p><span className="font-medium">N° Facture:</span> {creance.numeroFacture}</p>
                <p><span className="font-medium">Client:</span> {creance.client.nom}</p>
                <p><span className="font-medium">Montant total:</span> {creance.montantFacture} €</p>
                <p><span className="font-medium">Solde restant:</span> {creance.solde} €</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsReglement;
