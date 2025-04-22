
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit } from 'lucide-react';
import { clients, creances } from '@/data/mockData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DetailsClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const client = clients.find(c => c.id === id);
  const clientCreances = creances.filter(c => c.client.id === id);
  
  if (!client) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Client non trouvé</h2>
        <Button className="mt-4" onClick={() => navigate('/clients')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour aux clients
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Détails du client</h1>
        <Button variant="outline" onClick={() => navigate('/clients')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
      </div>
      
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{client.nom}</CardTitle>
          <Button size="sm">
            <Edit className="h-4 w-4 mr-2" /> Modifier
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Informations de contact</h3>
              <div className="space-y-1">
                <p><span className="font-medium">Email:</span> {client.email}</p>
                <p><span className="font-medium">Téléphone:</span> {client.telephone}</p>
                <p><span className="font-medium">Adresse:</span> {client.adresse}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Statistiques</h3>
              <div className="space-y-1">
                <p><span className="font-medium">Nombre de créances:</span> {clientCreances.length}</p>
                <p><span className="font-medium">Montant total dû:</span> {clientCreances.reduce((sum, c) => sum + c.solde, 0).toFixed(2)} €</p>
                <p><span className="font-medium">Créances en retard:</span> {clientCreances.filter(c => c.statut === 'retard' || c.statut === 'contentieux').length}</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold mb-4">Créances associées</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>N° Facture</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Solde</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientCreances.length > 0 ? (
                clientCreances.map((creance) => (
                  <TableRow key={creance.id} onClick={() => navigate(`/creances/${creance.id}`)} className="cursor-pointer">
                    <TableCell>{creance.numeroFacture}</TableCell>
                    <TableCell>{creance.dateEmission}</TableCell>
                    <TableCell>{creance.montantFacture} €</TableCell>
                    <TableCell>{creance.solde} €</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium 
                        ${creance.statut === 'payée' ? 'bg-green-100 text-green-800' : 
                        creance.statut === 'en cours' ? 'bg-blue-100 text-blue-800' :
                        creance.statut === 'retard' ? 'bg-amber-100 text-amber-800' : 
                        'bg-red-100 text-red-800'}`}>
                        {creance.statut}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">Aucune créance trouvée</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsClient;
