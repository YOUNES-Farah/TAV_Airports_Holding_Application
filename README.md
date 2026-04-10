# TAV_Airports_Holding_Application
Application web de gestion de stock développée pour TAV Tunisie (Aéroport Monastir)
# 📦 Smart Stock — Application Web de Gestion de Stock

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Application web centralisée de gestion de stock multi-départements**  
Développée pour TAV Tunisie — Aéroport Monastir Habib Bourguiba

</div>

---

## 📖 Description

**Smart Stock** est une application web de gestion de stock développée dans le cadre d'un stage d'été à l'**Aéroport Monastir Habib Bourguiba (TAV Tunisie)**. Elle remplace un système manuel basé sur Excel par une solution centralisée, sécurisée et adaptée à un environnement multi-départements.

---

## 🎯 Problématique

Le département technique gérait ses stocks via un fichier Excel présentant plusieurs limitations :

| Problème | Impact |
|---|---|
| Données non centralisées | Risques de duplication et versions multiples |
| Erreurs manuelles | Saisie non contrôlée, traçabilité insuffisante |
| Absence de dashboards | Impossible de suivre les niveaux de stock en temps réel |
| Collaboration impossible | Un seul utilisateur à la fois |
| Interface peu intuitive | Difficulté à retrouver une information rapidement |

---

## ✨ Fonctionnalités

### 🔧 Département Technique — Administrateur

- **Tableau de bord** avec indicateurs en temps réel :
  - Total produits enregistrés
  - Entrées reçues & sorties effectuées
  - Valeur globale du stock
  - Graphiques d'activité par département
  - Historique des mouvements récents
- **Gestion des produits** : ajout, modification, suppression, import/export Excel, recherche par nom / code Oracle
- **Gestion des fournisseurs** : ajout manuel ou automatique lors des entrées, modification, suppression
- **Vue globale** sur toutes les transactions de tous les départements

### 🏢 Autres Départements — Accès Standard

> Balisage · Autocom · Électrique Électronique · Système Mécanique · HVAC

- Saisie des **entrées** : désignation, quantité, date, fournisseur
- Saisie des **sorties** : désignation, quantité, date, motif / bénéficiaire
- Accès limité aux transactions du département concerné uniquement

### 🔔 Système de Notifications

- ✅ Messages de confirmation pour chaque opération (ajout, modification, suppression)
- ⚠️ Dialogue de confirmation avant toute suppression définitive
- ❌ Gestion des erreurs : stock insuffisant, e-mail invalide, champs obligatoires manquants

---

## 🛠️ Stack Technique

| Catégorie | Technologie | Usage |
|---|---|---|
| Framework Frontend | **React** | Composants réutilisables, UI modulaire |
| Typage | **TypeScript** | Robustesse et prévention des erreurs |
| Build Tool | **Vite** | Développement et build ultra-rapide |
| Styling | **Tailwind CSS** | Design cohérent et responsive |
| Icônes | **Lucide React** | Icônes modernes personnalisables |
| Export/Import | **XLSX** | Lecture et écriture de fichiers Excel |
| Téléchargement | **File-Saver** | Gestion des téléchargements côté client |

---

## 🏗️ Architecture

```
Smart Stock
├── Frontend (React + TypeScript + Vite)
│   ├── Page d'accueil — Sélection du département
│   ├── Module Département Technique (Admin)
│   │   ├── Tableau de bord
│   │   ├── Produits
│   │   ├── Fournisseurs
│   │   ├── Entrées
│   │   └── Sorties
│   └── Module Départements Standards
│       ├── Entrées
│       └── Sorties
├── Backend — Gestion des données
└── Base de données
    ├── Produits
    ├── Fournisseurs
    ├── Utilisateurs
    └── Transactions
```

### Rôles utilisateurs

```
┌─────────────────────────────────────────────┐
│           Page d'accueil (portail)          │
└──────────┬──────────────────────────────────┘
           │
     Sélection département
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
Technique     Autres départements
(Admin)       (Standard)
    │             │
    ▼             ▼
Accès complet Entrées/Sorties
+ vue globale uniquement
```

---


## 📊 Flux de données

```
Département Technique
        │
        ▼
Crée/Met à jour Produits & Fournisseurs
        │
        ▼
Tous les départements utilisent ces données
        │
        ▼
Effectuent leurs Entrées / Sorties
        │
        ▼
Transactions centralisées → consultables par le Technique
```

---

## 🔮 Perspectives d'évolution

- [ ] Notifications automatiques pour les seuils de stock critiques
- [ ] Application mobile pour les gestionnaires
- [ ] Intégration avec les autres systèmes d'information de l'entreprise
- [ ] Authentification utilisateur avec gestion des sessions
- [ ] Historique et audit log complet

---

## 👩‍💻 Auteure

**Farah YOUNES**  
Étudiante en Génie Informatique Industriel — Année universitaire 2025-2026  
[ENET'Com — École Nationale d'Électronique et des Télécommunications de Sfax](https://www.enetcom.usf.tn/)

**Encadrant :** M. Ahmed BAANANOU  
**Organisme :** TAV Tunisie — Aéroport Monastir Habib Bourguiba  
**Période :** 14 juillet 2025 – 22 août 2025

---

<div align="center">
  Made with ❤️ during internship at TAV Tunisie · ENET'Com Sfax 2025
</div>

