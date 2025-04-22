
import { Client, Creance, Reglement, Relance } from "../types";

// Données de démonstration pour les clients
export const clients: Client[] = [
  {
    id: "client1",
    nom: "Entreprise Dupont",
    email: "contact@dupont.fr",
    telephone: "01 23 45 67 89",
    adresse: "25 Rue de la Paix, Paris"
  },
  {
    id: "client2",
    nom: "Société Martin",
    email: "info@martin-sa.fr",
    telephone: "01 98 76 54 32",
    adresse: "10 Avenue Victor Hugo, Lyon"
  },
  {
    id: "client3",
    nom: "Groupe Lefevre",
    email: "contact@lefevre-group.com",
    telephone: "01 45 67 89 10",
    adresse: "5 Boulevard Haussmann, Paris"
  },
  {
    id: "client4",
    nom: "Tech Solutions",
    email: "support@techsolutions.fr",
    telephone: "01 67 89 12 34",
    adresse: "15 Rue de l'Innovation, Bordeaux"
  },
  {
    id: "client5",
    nom: "Atelier Créatif",
    email: "hello@ateliercrea.fr",
    telephone: "01 34 56 78 90",
    adresse: "8 Rue des Arts, Nantes"
  }
];

// Données de démonstration pour les créances
export const creances: Creance[] = [
  {
    id: "cre1",
    numeroFacture: "F2023-001",
    dateEmission: "2023-01-15",
    client: clients[0],
    montantFacture: 1500,
    montantEncaisse: 1500,
    solde: 0,
    echeance: "2023-02-15",
    retard: 0,
    statut: "payée",
    actionRecouvrement: "Aucune"
  },
  {
    id: "cre2",
    numeroFacture: "F2023-002",
    dateEmission: "2023-02-01",
    client: clients[1],
    montantFacture: 2300,
    montantEncaisse: 0,
    solde: 2300,
    echeance: "2023-03-01",
    retard: 402,
    statut: "retard",
    actionRecouvrement: "Relance téléphonique effectuée le 05/03/2023"
  },
  {
    id: "cre3",
    numeroFacture: "F2023-003",
    dateEmission: "2023-02-10",
    client: clients[2],
    montantFacture: 3200,
    montantEncaisse: 1600,
    solde: 1600,
    echeance: "2023-03-10",
    retard: 393,
    statut: "retard",
    actionRecouvrement: "Email de relance envoyé le 15/03/2023"
  },
  {
    id: "cre4",
    numeroFacture: "F2023-004",
    dateEmission: "2023-03-05",
    client: clients[3],
    montantFacture: 1800,
    montantEncaisse: 0,
    solde: 1800,
    echeance: "2023-04-05",
    retard: 367,
    statut: "contentieux",
    actionRecouvrement: "Dossier transmis au service juridique"
  },
  {
    id: "cre5",
    numeroFacture: "F2023-005",
    dateEmission: "2023-03-20",
    client: clients[4],
    dateReglement: "2023-04-15",
    montantFacture: 950,
    montantEncaisse: 950,
    solde: 0,
    echeance: "2023-04-20",
    retard: 0,
    statut: "payée",
    actionRecouvrement: "Aucune"
  },
  {
    id: "cre6",
    numeroFacture: "F2023-006",
    dateEmission: "2023-04-02",
    client: clients[0],
    montantFacture: 2100,
    montantEncaisse: 1050,
    solde: 1050,
    echeance: "2023-05-02",
    retard: 340,
    statut: "retard",
    actionRecouvrement: "Courrier recommandé envoyé le 10/05/2023"
  },
  {
    id: "cre7",
    numeroFacture: "F2023-007",
    dateEmission: "2023-04-18",
    client: clients[2],
    montantFacture: 1250,
    montantEncaisse: 0,
    solde: 1250,
    echeance: "2023-05-18",
    retard: 324,
    statut: "contentieux",
    actionRecouvrement: "Mise en demeure envoyée"
  },
  {
    id: "cre8",
    numeroFacture: "F2023-008",
    dateEmission: "2023-05-05",
    client: clients[3],
    montantFacture: 3100,
    montantEncaisse: 3100,
    solde: 0,
    echeance: "2023-06-05",
    retard: 0,
    statut: "payée",
    actionRecouvrement: "Aucune"
  }
];

// Données de démonstration pour les règlements
export const reglements: Reglement[] = [
  {
    id: "reg1",
    numeroFacture: "F2023-001",
    client: clients[0],
    dateEmission: "2023-01-15",
    montantEncaisse: 1500,
    modePaiement: "virement",
    dateReglement: "2023-02-10",
    reference: "VIR-2023-78945"
  },
  {
    id: "reg2",
    numeroFacture: "F2023-003",
    client: clients[2],
    dateEmission: "2023-02-10",
    montantEncaisse: 1600,
    modePaiement: "chèque",
    dateReglement: "2023-03-05",
    reference: "CHQ-546789"
  },
  {
    id: "reg3",
    numeroFacture: "F2023-005",
    client: clients[4],
    dateEmission: "2023-03-20",
    montantEncaisse: 950,
    modePaiement: "carte",
    dateReglement: "2023-04-15",
    reference: "CB-78945612"
  },
  {
    id: "reg4",
    numeroFacture: "F2023-006",
    client: clients[0],
    dateEmission: "2023-04-02",
    montantEncaisse: 1050,
    modePaiement: "espèces",
    dateReglement: "2023-04-20"
  },
  {
    id: "reg5",
    numeroFacture: "F2023-008",
    client: clients[3],
    dateEmission: "2023-05-05",
    montantEncaisse: 3100,
    modePaiement: "virement",
    dateReglement: "2023-05-30",
    reference: "VIR-2023-85214"
  }
];

// Données de démonstration pour les relances
export const relances: Relance[] = [
  {
    id: "rel1",
    numeroFacture: "F2023-002",
    client: clients[1],
    dateEmission: "2023-02-01",
    echeance: "2023-03-01",
    retard: 10,
    solde: 2300,
    typeRelance: "téléphone",
    dateRelance: "2023-03-11",
    statut: "répondue",
    commentaire: "Le client s'engage à payer d'ici fin du mois"
  },
  {
    id: "rel2",
    numeroFacture: "F2023-003",
    client: clients[2],
    dateEmission: "2023-02-10",
    echeance: "2023-03-10",
    retard: 5,
    solde: 3200,
    typeRelance: "email",
    dateRelance: "2023-03-15",
    statut: "répondue",
    commentaire: "Paiement partiel de 1600€ effectué le 20/03/2023"
  },
  {
    id: "rel3",
    numeroFacture: "F2023-004",
    client: clients[3],
    dateEmission: "2023-03-05",
    echeance: "2023-04-05",
    retard: 10,
    solde: 1800,
    typeRelance: "email",
    dateRelance: "2023-04-15",
    statut: "envoyée"
  },
  {
    id: "rel4",
    numeroFacture: "F2023-004",
    client: clients[3],
    dateEmission: "2023-03-05",
    echeance: "2023-04-05",
    retard: 20,
    solde: 1800,
    typeRelance: "courrier",
    dateRelance: "2023-04-25",
    statut: "envoyée"
  },
  {
    id: "rel5",
    numeroFacture: "F2023-006",
    client: clients[0],
    dateEmission: "2023-04-02",
    echeance: "2023-05-02",
    retard: 8,
    solde: 2100,
    typeRelance: "téléphone",
    dateRelance: "2023-05-10",
    statut: "répondue",
    commentaire: "Paiement partiel de 1050€ effectué le même jour"
  },
  {
    id: "rel6",
    numeroFacture: "F2023-006",
    client: clients[0],
    dateEmission: "2023-04-02",
    echeance: "2023-05-02",
    retard: 25,
    solde: 1050,
    typeRelance: "courrier",
    dateRelance: "2023-05-27",
    statut: "en attente"
  },
  {
    id: "rel7",
    numeroFacture: "F2023-007",
    client: clients[2],
    dateEmission: "2023-04-18",
    echeance: "2023-05-18",
    retard: 7,
    solde: 1250,
    typeRelance: "email",
    dateRelance: "2023-05-25",
    statut: "envoyée"
  },
  {
    id: "rel8",
    numeroFacture: "F2023-007",
    client: clients[2],
    dateEmission: "2023-04-18",
    echeance: "2023-05-18",
    retard: 15,
    solde: 1250,
    typeRelance: "téléphone",
    dateRelance: "2023-06-02",
    statut: "envoyée"
  },
  {
    id: "rel9",
    numeroFacture: "F2023-007",
    client: clients[2],
    dateEmission: "2023-04-18",
    echeance: "2023-05-18",
    retard: 30,
    solde: 1250,
    typeRelance: "courrier",
    dateRelance: "2023-06-17",
    statut: "envoyée"
  }
];

// Stats pour le tableau de bord
export const getStats = () => {
  const totalCreances = creances.length;
  const montantTotal = creances.reduce((sum, creance) => sum + creance.montantFacture, 0);
  const montantEncaisse = creances.reduce((sum, creance) => sum + creance.montantEncaisse, 0);
  const tauxRecouvrement = Math.round((montantEncaisse / montantTotal) * 100);
  const creancesEnRetard = creances.filter(creance => creance.retard > 0).length;
  const relancesJour = relances.filter(relance => 
    new Date(relance.dateRelance).toDateString() === new Date().toDateString()
  ).length;

  return {
    totalCreances,
    montantTotal,
    montantEncaisse,
    tauxRecouvrement,
    creancesEnRetard,
    relancesJour
  };
};
