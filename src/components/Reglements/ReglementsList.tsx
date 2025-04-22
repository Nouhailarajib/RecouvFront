import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Reglement } from '@/types';
import { Search, Filter } from 'lucide-react';

interface ReglementsListProps {
  reglements: Reglement[];
}

const ReglementsList = ({ reglements }: ReglementsListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReglements = reglements.filter(reglement =>
    reglement.numeroFacture.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reglement.client.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeClass = (mode: string) => {
    switch (mode) {
      case 'virement':
        return 'status-paid';
      case 'chèque':
        return 'bg-secondary';
      case 'carte':
        return 'status-pending';
      case 'espèces':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Liste des règlements</CardTitle>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          <span>Filtrer</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher par n° facture ou client..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>N° Facture</th>
                <th>Client</th>
                <th>Date émission</th>
                <th>Date règlement</th>
                <th>Montant encaissé</th>
                <th>Mode de paiement</th>
                <th>Référence</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReglements.map((reglement) => (
                <tr key={reglement.id}>
                  <td>{reglement.numeroFacture}</td>
                  <td>{reglement.client.nom}</td>
                  <td>{reglement.dateEmission}</td>
                  <td>{reglement.dateReglement}</td>
                  <td>{reglement.montantEncaisse} €</td>
                  <td>
                    <span className={`status-badge ${getBadgeClass(reglement.modePaiement)}`}>
                      {reglement.modePaiement}
                    </span>
                  </td>
                  <td>{reglement.reference || '-'}</td>
                  <td>
                    <Button variant="outline" size="sm">Détails</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReglementsList;
