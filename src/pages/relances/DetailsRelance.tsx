
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, FileText } from 'lucide-react';
import { relances, creances } from '@/data/mockData';

const DetailsRelance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const relance = relances.find(r => r.id === id);
  const creance = creances.find(c => relance?.numeroFacture === c.numeroFacture);
  
  if (!relance || !creance) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Relance non trouvée</h2>
        <Button className="mt-4" onClick={() => navigate('/relances')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour aux relances
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Détails de la relance</h1>
        <Button variant="outline" onClick={() => navigate('/relances')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
      </div>
      
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Relance du {relance.dateRelance}</CardTitle>
          <div className="flex gap-2">
            <Button size="sm" onClick={() => navigate(`/creances/${creance.id}`)}>
              <FileText className="h-4 w-4 mr-2" /> Voir la créance
            </Button>
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-2" /> Modifier
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Informations de la relance</h3>
              <div className="space-y-1">
                <p><span className="font-medium">Type:</span> {relance.typeRelance}</p>
                <p><span className="font-medium">Date:</span> {relance.dateRelance}</p>
                <p>
                  <span className="font-medium">Statut:</span>
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full font-medium 
                    ${relance.statut === 'envoyée' ? 'bg-blue-100 text-blue-800' : 
                    relance.statut === 'répondue' ? 'bg-green-100 text-green-800' : 
                    'bg-amber-100 text-amber-800'}`}>
                    {relance.statut}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Informations de la créance</h3>
              <div className="space-y-1">
                <p><span className="font-medium">N° Facture:</span> {creance.numeroFacture}</p>
                <p><span className="font-medium">Client:</span> {creance.client.nom}</p>
                <p><span className="font-medium">Solde dû:</span> {creance.solde} €</p>
                <p><span className="font-medium">Retard:</span> {creance.retard} jours</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Commentaire</h3>
            <div className="p-4 border rounded-md bg-muted/20">
              {relance.commentaire || 'Aucun commentaire'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsRelance;
