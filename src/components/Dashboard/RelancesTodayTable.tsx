
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Relance } from '@/types';

interface RelancesTodayTableProps {
  relances: Relance[];
}

const RelancesTodayTable = ({ relances }: RelancesTodayTableProps) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Relances du jour</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>N° Facture</th>
                <th>Type</th>
                <th>Solde</th>
                <th>Retard (jours)</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {relances.length > 0 ? (
                relances.map((relance) => (
                  <tr key={relance.id}>
                    <td>{relance.client.nom}</td>
                    <td>{relance.numeroFacture}</td>
                    <td>{relance.typeRelance}</td>
                    <td>{relance.solde} €</td>
                    <td>{relance.retard}</td>
                    <td>
                      <span className={`status-badge ${
                        relance.statut === 'envoyée' 
                          ? 'status-pending' 
                          : relance.statut === 'répondue' 
                            ? 'status-paid' 
                            : 'bg-secondary'
                      }`}>
                        {relance.statut}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    Aucune relance prévue aujourd'hui
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelancesTodayTable;
