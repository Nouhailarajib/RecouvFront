import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Creance } from '@/types';
import { Search, Filter } from 'lucide-react';

interface CreancesListProps {
  creances: Creance[];
}

const CreancesList = ({ creances }: CreancesListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredCreances = creances.filter(creance => {
    const matchesSearch = 
      creance.numeroFacture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creance.client.nom.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter ? creance.statut === statusFilter : true;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (statut: string) => {
    switch (statut) {
      case 'payée':
        return 'status-paid';
      case 'en cours':
        return 'bg-secondary';
      case 'retard':
        return 'status-pending';
      case 'contentieux':
        return 'status-overdue';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Liste des créances</CardTitle>
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
          <div className="flex ml-4 gap-2">
            <Button 
              variant={statusFilter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter(null)}
            >
              Tous
            </Button>
            <Button 
              variant={statusFilter === "payée" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("payée")}
            >
              Payées
            </Button>
            <Button 
              variant={statusFilter === "retard" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("retard")}
            >
              En retard
            </Button>
          </div>
        </div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>N° Facture</th>
                <th>Client</th>
                <th>Date d'émission</th>
                <th>Échéance</th>
                <th>Montant facturé</th>
                <th>Solde</th>
                <th>Retard (j)</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCreances.map((creance) => (
                <tr key={creance.id}>
                  <td>{creance.numeroFacture}</td>
                  <td>{creance.client.nom}</td>
                  <td>{creance.dateEmission}</td>
                  <td>{creance.echeance}</td>
                  <td>{creance.montantFacture} €</td>
                  <td>{creance.solde} €</td>
                  <td>{creance.retard > 0 ? creance.retard : '-'}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(creance.statut)}`}>
                      {creance.statut}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Détails</Button>
                      <Button variant="outline" size="sm">Relancer</Button>
                    </div>
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

export default CreancesList;
