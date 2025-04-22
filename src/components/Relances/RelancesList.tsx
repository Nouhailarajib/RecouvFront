import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Relance } from '@/types';
import { Search, Filter } from 'lucide-react';

interface RelancesListProps {
  relances: Relance[];
}

const RelancesList = ({ relances }: RelancesListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string | null>(null);

  const filteredRelances = relances.filter(relance => {
    const matchesSearch = 
      relance.numeroFacture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      relance.client.nom.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter ? relance.typeRelance === typeFilter : true;
    
    return matchesSearch && matchesType;
  });

  const getTypeClass = (type: string) => {
    switch (type) {
      case 'email':
        return 'status-paid';
      case 'téléphone':
        return 'status-pending';
      case 'courrier':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  const getStatusClass = (statut: string) => {
    switch (statut) {
      case 'envoyée':
        return 'status-pending';
      case 'répondue':
        return 'status-paid';
      case 'en attente':
        return 'bg-secondary';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Liste des relances</CardTitle>
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
              variant={typeFilter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setTypeFilter(null)}
            >
              Tous
            </Button>
            <Button 
              variant={typeFilter === "email" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTypeFilter("email")}
            >
              Email
            </Button>
            <Button 
              variant={typeFilter === "téléphone" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTypeFilter("téléphone")}
            >
              Téléphone
            </Button>
            <Button 
              variant={typeFilter === "courrier" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTypeFilter("courrier")}
            >
              Courrier
            </Button>
          </div>
        </div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>N° Facture</th>
                <th>Type</th>
                <th>Date relance</th>
                <th>Solde</th>
                <th>Retard (j)</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRelances.map((relance) => (
                <tr key={relance.id}>
                  <td>{relance.client.nom}</td>
                  <td>{relance.numeroFacture}</td>
                  <td>
                    <span className={`status-badge ${getTypeClass(relance.typeRelance)}`}>
                      {relance.typeRelance}
                    </span>
                  </td>
                  <td>{relance.dateRelance}</td>
                  <td>{relance.solde} €</td>
                  <td>{relance.retard}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(relance.statut)}`}>
                      {relance.statut}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Détails</Button>
                      <Button variant="outline" size="sm">Marquer</Button>
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

export default RelancesList;
