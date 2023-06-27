import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import State from ".prisma/client";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "a-assigned-teams-button-text": "Assigned Teams",
                
                "a-date-range-lang": "en",

                "a-phase-count-phase": "Phases",
                
                "a-project-description-button-finish-editing": "Finish Editing",
                "a-project-description-button-start-editing": "Edit Description",
                
                "a-project-statebutton-publish": "Publish Project",
                "a-project-statebutton-complete": "Complete Project",
                "a-project-statebutton-archive": "Archive Project",
                "a-project-statebutton-republish": "Republish Project",
                "a-project-statebutton-redrafe": "Redraft Project",

                "a-week-display-week": "CW",

                "o-calculate-time-modal-title": "Calculate Time",
                "o-calculate-time-modal-optimistic-guess": "Optimistic Guess",
                "o-calculate-time-modal-pessimistic-guess": "Pessimistic Guess",
                "o-calculate-time-modal-realistic-guess": "Realistic Guess",
                "o-calculate-time-modal-internal-estimation": "Internal Estimation",
                "o-calculate-time-modal-external-estimation": "External Estimation",
                "o-calculate-time-modal-estimation-hours": "Hours",
                "o-calculate-time-modal-estimation-placeholder": "Fill out all fields to calculate the estimation for internal and external usage.",
                "o-calculate-time-modal-explaination-headline": "How does it work?",
                "o-calculate-time-modal-explaination": "PERT's three-point estimation technique is used to estimate the time required to complete a project phase. It considers three estimates for each task: optimistic, most likely, and pessimistic. This method helps to provide a more realistic and accurate estimate by considering potential risks and uncertainties that may affect the task, allowing for better management of resources and timelines.",
            
                "o-new-project-modal-title": "Create New Project",
                "o-new-project-modal-project-name": "Project Name",
                "o-new-project-modal-project-name-placeholder": "Example Project",
                "o-new-project-modal-start-date": "Start Date",
                "o-new-project-modal-start-date-placeholder": "Select Date",
                "o-new-project-modal-assigned-teams": "Assigned Teams",
                "o-new-project-modal-assigned-teams-placeholder": "Select Participating Teams",
                "o-new-project-modal-customer": "Customer",
                "o-new-project-modal-customer-placeholder": "Set Customer Name",
                "o-new-project-modal-project-description": "Project Description",
                "o-new-project-modal-project-description-placeholder": "Describe what the project is about",
            
                "o-navigation-overview": "Overview",
                "o-navigation-projects": "Projects",
                "o-navigation-employees": "Employees",
                "o-navigation-settings": "Settings",
                "o-navigation-logout": "Logout",

                "o-project-card-employees": "Employees",

                "o-project-description-title": "Project Description",
                "o-project-description-placeholder": "Describe what the project is about",
            
                "o-project-toolbar-teams": "Teams",
                "o-project-toolbar-draft": "DRAFT",
                "o-project-toolbar-ongoing": "ONGOING",
                "o-project-toolbar-completed": "FINISHED",
                "o-project-toolbar-archived": "ARCHIVED",
                "o-planning-toolbar-team": "Team",
                "o-planning-toolbar-capacity-allocation": "Staff Capacity Allocation",

                "calculate-time-estimation": "Calculate Time Estimation",
            }
        },
        de: {
            translation: {
                "a-assigned-teams-button-text": "Zugeordnete Teams",
                
                "a-date-range-lang": "de",
                
                "a-phase-count-phase": "Phasen",
                
                "a-project-description-button-finish-editing": "Bearbeitung Beenden",
                "a-project-description-button-start-editing": "Beschreibung Bearbeiten",
                "a-project-statebutton-publish": "Projekt Veröffentlichen",
                "a-project-statebutton-complete": "Projekt Abschließen",
                "a-project-statebutton-archive": "Projekt Archivieren",
                "a-project-statebutton-republish": "Projekt Wiederveröffentlichen",
                "a-project-statebutton-redraft": "Projekt Neu Anlegen",
                
                "a-week-display-week": "KW",
                
                "o-calculate-time-modal-title": "Phasendauer Berechnen",
                "o-calculate-time-modal-optimistic-guess": "Optimistische Schätzung",
                "o-calculate-time-modal-pessimistic-guess": "Pessimistische Schätzung",
                "o-calculate-time-modal-realistic-guess": "Realistische Schätzung",
                "o-calculate-time-modal-internal-estimation": "Interne Zielsätzung",
                "o-calculate-time-modal-external-estimation": "Externe Zielsätzung",
                "o-calculate-time-modal-estimation-hours": "Studen",
                "o-calculate-time-modal-estimation-placeholder": "Füllen Sie alle Felder aus, um die Schätzung für die interne und externe Nutzung zu berechnen.",
                "o-calculate-time-modal-explaination-headline": "Wie Funktioniert's?",
                "o-calculate-time-moda-explaination": "Die Drei-Punkte-Schätzungstechnik von PERT wird verwendet, um die für den Abschluss einer Projektphase erforderliche Zeit zu schätzen. Sie berücksichtigt drei Schätzungen für jede Aufgabe: optimistisch, höchstwahrscheinlich und pessimistisch. Diese Methode trägt zu einer realistischeren und genaueren Schätzung bei, da sie potenzielle Risiken und Unwägbarkeiten, die sich auf die Aufgabe auswirken können, berücksichtigt und so eine bessere Verwaltung der Ressourcen und Zeitpläne ermöglicht.",
            
                "o-new-project-modal-title": "Neues Projekt Erstellen",
                "o-new-project-modal-project-name": "Projekt Name",
                "o-new-project-modal-project-name-placeholder": "Beispiel Projekt",
                "o-new-project-modal-start-date": "Start Datum",
                "o-new-project-modal-start-date-placeholder": "Datum Wählen",
                "o-new-project-modal-assigned-teams": "Zugeordnete Teams",
                "o-new-project-modal-assigned-teams-placeholder": "Teams Auswählen",
                "o-new-project-modal-customer": "Kunde",
                "o-new-project-modal-customer-placeholder": "Kundenname Eingeben",
                "o-new-project-modal-project-description": "Projekt Beschreibung",
                "o-new-project-modal-project-description-placeholder": "Beschreibe, um was es in diesem Projekt geht",
            
                "o-navigation-overview": "Übersicht",
                "o-navigation-projects": "Projekte",
                "o-navigation-employees": "Mitarbeitende",
                "o-navigation-settings": "Einstellungen",
                "o-navigation-logout": "Ausloggen",

                "o-project-card-employees": "Mitarbeitende",

                "o-project-description-title": "Projektbeschreibung",
                "o-project-description-placeholder": "Beschreibe, um was es in diesem Projekt geht",
                
                "o-project-toolbar-teams": "Teams",
                "o-project-toolbar-draft": "ENTWURF",
                "o-project-toolbar-ongoing": "LAUFEND",
                "o-project-toolbar-completed": "ABGESCHLOSSEN",
                "o-project-toolbar-archived": "ARCHIVIERT",
                "o-planning-toolbar-team": "Team",
                "o-planning-toolbar-capacity-allocation": "Personal-Kapazitäts-Zuweisung",

                "calculate-time-estimation": "Zeitschätzung Berechnen",
            }
        }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
});

export default i18n;