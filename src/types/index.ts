
// Types pour la gestion des créances
export interface Client {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
}

export type CreanceStatut = 'payée' | 'en cours' | 'retard' | 'contentieux';

export interface Creance {
  id: string;
  numeroFacture: string;
  dateEmission: string;
  client: Client;
  dateReglement?: string;
  montantFacture: number;
  montantEncaisse: number;
  solde: number;
  echeance: string;
  retard: number;
  statut: CreanceStatut;
  actionRecouvrement: string;
}

export interface Reglement {
  id: string;
  numeroFacture: string;
  client: Client;
  dateEmission: string;
  montantEncaisse: number;
  modePaiement: 'espèces' | 'chèque' | 'virement' | 'carte';
  dateReglement: string;
  reference?: string;
}

export interface Relance {
  id: string;
  numeroFacture: string;
  client: Client;
  dateEmission: string;
  echeance: string;
  retard: number;
  solde: number;
  typeRelance: 'email' | 'téléphone' | 'courrier';
  dateRelance: string;
  statut: 'envoyée' | 'en attente' | 'répondue';
  commentaire?: string;
}

export interface DashboardStats {
  totalCreances: number;
  montantTotal: number;
  montantEncaisse: number;
  tauxRecouvrement: number;
  creancesEnRetard: number;
  relancesJour: number;
}
