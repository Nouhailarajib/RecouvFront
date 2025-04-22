
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, CreditCard, Mail } from 'lucide-react';
import { creances, reglements, relances } from '@/data/mockData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DetailsCreance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const creance = creances.find(c => c.id === id);
  const creanceReglements = reglements.filter(r => r.numeroFacture === creance?.numeroFacture);
  const creanceRelances = relances.filter(r => r.numeroFacture === creance?.numeroFacture);
  
  if (!creance) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Créance non trouvée</h2>
        <Button className="mt-4" onClick={() => navigate('/creances')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour aux créances
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Détails de la créance</h1>
        <Button variant="outline" onClick={() => navigate('/creances')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
      </div>
      
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Facture {creance.numeroFacture}</CardTitle>
          <div className="flex gap-2">
            {creance.statut !== 'payée' && (
              <>
                <Button size="sm" onClick={() => navigate('/reglements/nouveau')}>
                  <CreditCard className="h-4 w-4 mr-2" /> Ajouter un règlement
                </Button>
                <Button 
                  size="sm" 
                  disabled={creance.statut === 'payée'}
                  onClick={() => navigate('/relances/nouveau')}
                >
                  <Mail className="h-4 w-4 mr-2" /> Créer une relance
                </Button>
              </>
            )}
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-2" /> Modifier
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Informations générales</h3>
              <div className="space-y-1">
                <p><span className="font-medium">Client:</span> {creance.client.nom}</p>
                <p><span className="font-medium">Date d'émission:</span> {creance.dateEmission}</p>
                <p><span className="font-medium">Échéance:</span> {creance.echeance}</p>
                <p><span className="font-medium">Montant facturé:</span> {creance.montantFacture} €</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">État de paiement</h3>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Statut:</span> 
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full font-medium 
                    ${creance.statut === 'payée' ? 'bg-green-100 text-green-800' : 
                    creance.statut === 'en cours' ? 'bg-blue-100 text-blue-800' :
                    creance.statut === 'retard' ? 'bg-amber-100 text-amber-800' : 
                    'bg-red-100 text-red-800'}`}>
                    {creance.statut}
                  </span>
                </p>
                <p><span className="font-medium">Montant encaissé:</span> {creance.montantEncaisse} €</p>
                <p><span className="font-medium">Solde restant:</span> {creance.solde} €</p>
                <p><span className="font-medium">Retard:</span> {creance.retard > 0 ? `${creance.retard} jours` : 'Aucun'}</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold mb-4">Règlements</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Référence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {creanceReglements.length > 0 ? (
                creanceReglements.map((reglement, index) => (
                  <TableRow key={index}>
                    <TableCell>{reglement.dateReglement}</TableCell>
                    <TableCell>{reglement.montantEncaisse} €</TableCell>
                    <TableCell>{reglement.modePaiement}</TableCell>
                    <TableCell>{reglement.reference || '-'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">Aucun règlement enregistré</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
          <h3 className="font-semibold mb-4 mt-8">Historique des relances</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Commentaire</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {creanceRelances.length > 0 ? (
                creanceRelances.map((relance, index) => (
                  <TableRow key={index}>
                    <TableCell>{relance.dateRelance}</TableCell>
                    <TableCell>{relance.typeRelance}</TableCell>
                    <TableCell>{relance.statut}</TableCell>
                    <TableCell>{relance.commentaire || '-'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">Aucune relance enregistrée</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsCreance;
