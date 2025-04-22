
import React from 'react';
import {
  BarChart3,
  Banknote,
  Clock,
  AlertTriangle,
  CalendarCheck,
  Percent
} from 'lucide-react';
import StatCard from '@/components/Dashboard/StatCard';
import CreancesByStatusChart from '@/components/Dashboard/CreancesByStatusChart';
import RelancesAgingChart from '@/components/Dashboard/RelancesAgingChart';
import RelancesTodayTable from '@/components/Dashboard/RelancesTodayTable';
import { creances, relances, getStats } from '@/data/mockData';

const Dashboard = () => {
  const stats = getStats();

  // Données pour le graphique de répartition par statut
  const creancesByStatus = [
    { 
      name: 'Payée', 
      value: creances.filter(c => c.statut === 'payée').reduce((sum, c) => sum + c.montantFacture, 0),
      color: '#2C7A7B'
    },
    { 
      name: 'En cours', 
      value: creances.filter(c => c.statut === 'en cours').reduce((sum, c) => sum + c.montantFacture, 0),
      color: '#4299E1'
    },
    { 
      name: 'En retard', 
      value: creances.filter(c => c.statut === 'retard').reduce((sum, c) => sum + c.montantFacture, 0),
      color: '#ED8936'
    },
    { 
      name: 'Contentieux', 
      value: creances.filter(c => c.statut === 'contentieux').reduce((sum, c) => sum + c.montantFacture, 0),
      color: '#C53030'
    },
  ];

  // Données pour le graphique de vieillissement
  const relancesAging = [
    { name: '1-30 jours', value: creances.filter(c => c.retard > 0 && c.retard <= 30).reduce((sum, c) => sum + c.solde, 0) },
    { name: '31-60 jours', value: creances.filter(c => c.retard > 30 && c.retard <= 60).reduce((sum, c) => sum + c.solde, 0) },
    { name: '61-90 jours', value: creances.filter(c => c.retard > 60 && c.retard <= 90).reduce((sum, c) => sum + c.solde, 0) },
    { name: '> 90 jours', value: creances.filter(c => c.retard > 90).reduce((sum, c) => sum + c.solde, 0) },
  ];

  // Relances du jour
  const today = new Date().toISOString().split('T')[0];
  const relancesToday = relances.filter(r => r.dateRelance === today);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
      
      {/* Statistiques */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total des créances"
          value={stats.totalCreances}
          icon={<BarChart3 className="h-4 w-4" />}
          description="Nombre total de créances"
        />
        <StatCard
          title="Montant total"
          value={`${stats.montantTotal.toLocaleString()} €`}
          icon={<Banknote className="h-4 w-4" />}
          description="Montant total des créances"
        />
        <StatCard
          title="Montant encaissé"
          value={`${stats.montantEncaisse.toLocaleString()} €`}
          icon={<Banknote className="h-4 w-4" />}
          description="Montant total encaissé"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Taux de recouvrement"
          value={`${stats.tauxRecouvrement} %`}
          icon={<Percent className="h-4 w-4" />}
          description="Pourcentage des créances recouvrées"
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="Créances en retard"
          value={stats.creancesEnRetard}
          icon={<AlertTriangle className="h-4 w-4" />}
          description="Nombre de créances en retard"
          trend={{ value: 10, isPositive: false }}
        />
        <StatCard
          title="Relances du jour"
          value={stats.relancesJour}
          icon={<Clock className="h-4 w-4" />}
          description="Nombre de relances à effectuer aujourd'hui"
        />
      </div>

      {/* Graphiques */}
      <div className="grid gap-4 md:grid-cols-2">
        <CreancesByStatusChart data={creancesByStatus} />
        <RelancesAgingChart data={relancesAging} />
      </div>

      {/* Table des relances du jour */}
      <RelancesTodayTable relances={relancesToday.length > 0 ? relancesToday : relances.slice(0, 3)} />
    </div>
  );
};

export default Dashboard;
