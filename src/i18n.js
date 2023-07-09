import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import State from ".prisma/client";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "country-code": "GB",

                "a-assigned-teams-button-text": "Assigned Teams",
                
                "a-date-range-lang": "en",

                "a-phase-count-phase": "Phases",
                
                "a-project-description-button-finish-editing": "Finish Editing",
                "a-project-description-button-start-editing": "Edit Description",
                
                "a-project-statebutton-publish": "Publish Project",
                "a-project-statebutton-complete": "Complete Project",
                "a-project-statebutton-archive": "Archive Project",
                "a-project-statebutton-republish": "Republish Project",
                "a-project-statebutton-redraft": "Redraft Project",

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
                "o-new-project-modal-project-name-required-message": "You need to provide a project name.",
                "o-new-project-modal-project-date-required-message": "You need to provide a start date.",
                "o-new-project-modal-project-teams-required-message": "You need to assign at least 1 Team to this project.",
                "o-new-project-modal-project-customer-required-message": "You need to insert the name of the Customer.",
                "o-new-project-modal-project-description-required-message": "You need to provide a project description.",
                "o-new-project-modal-start-date": "Start Date",
                "o-new-project-modal-start-date-placeholder": "Select Date",
                "o-new-project-modal-assigned-teams": "Assigned Teams",
                "o-new-project-modal-assigned-teams-placeholder": "Select Participating Teams",
                "o-new-project-modal-customer": "Customer",
                "o-new-project-modal-customer-placeholder": "Set Customer Name",
                "o-new-project-modal-project-description": "Project Description",
                "o-new-project-modal-project-description-placeholder": "Describe what the project is about",
                "o-new-project-modal-footer-submit": "Create New Project",
                "o-new-project-modal-footer-cancel": "Cancel",

                "o-new-phase-modal-title": "Create New Project Phase",
                "o-new-phase-modal-phase-name": "Project Phase Name",
                "o-new-phase-modal-phase-name-placeholder": "Select Phase Name",
                "o-new-phase-modal-phase-dependency": "Dependency",
                "o-new-phase-modal-phase-dependency-placeholder": "Select Key Phase",
                "o-new-phase-modal-phase-start-date": "Start Date",
                "o-new-phase-modal-phase-end-date": "End Date",
                "o-new-phase-modal-footer-submit": "Create New Phase",
                "o-new-phase-modal-footer-cancel": "Cancel",

                "o-edit-project-info-modal-title": "Edit Project Information",
                "o-edit-project-info-modal-cancel": "Cancel",
                "o-edit-project-info-modal-submit": "Save Changes",
                "o-edit-timeframe-modal-delete": "Delete Timeframe",
                "o-edit-timeframe-modal-workweek": "Adjust Workinghours",
            
                "o-navigation-overview": "Overview",
                "o-navigation-projects": "Projects",
                "o-navigation-employees": "Employees",
                "o-navigation-settings": "Settings",
                "o-navigation-logout": "Logout",

                "o-project-card-date-undefined": "No Date Defined",
                "o-project-card-no-employees": "No Employees Assigned",
                "o-project-card-employees": "Employees",
                "o-project-card-no-phases": "No Phases Defined",

                "o-employee-card-workweek": "hours/week",

                "o-project-description-title": "Project Description",
                "o-project-description-placeholder": "Describe what the project is about",
            
                "o-project-toolbar-teams": "Teams",
                "o-project-toolbar-draft": "DRAFT",
                "o-project-toolbar-ongoing": "ONGOING",
                "o-project-toolbar-completed": "FINISHED",
                "o-project-toolbar-archived": "ARCHIVED",
                "o-planning-toolbar-team": "Team",
                "o-planning-toolbar-capacity-allocation": "Staff Capacity Allocation",

                "o-project-infobar-startdate": "Start Date",
                "o-project-infobar-startdate-undefined": "No Date Defined",
                "o-project-infobar-enddate": "End Date",
                "o-project-infobar-enddate-undefined": "No Date Defined",
                "o-project-infobar-customer": "Customer",
                "o-project-infobar-customer-undefined": "No Customer Defined",
                "o-project-infobar-phases": "Phases",
                "o-project-infobar-phases-undefined": "No Phases Defined",
                "o-project-infobar-edit": "Edit Information",

                "o-navigation-width": "120px",

                "calculate-time-estimation": "Calculate Time Estimation",

                "p-project-add-project-button": "Add Project",
                "p-projects-overview-title": "Project Overview",
                "p-project-button-switch-left": "Project Overview",
                "p-project-button-switch-right": "Project Planning",
                "p-project-defautl-banner": "https://res.cloudinary.com/dubyrwfam/image/upload/v1688232113/proWorkforce/DALL_E_2023-07-01_19.20.03_-_a_default_banner_image_for_a_project_development_tool_ysohao.png",
            
                "p-phase-page-header-title": "Project Planning",
                "p-phase-page-header-subtitle": "back to last page",
            }
        },
        de: {
            translation: {
                "country-code": "DE",

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
                "o-new-project-modal-project-name-required-message": "Du musst einen Projektnamen angeben.",
                "o-new-project-modal-project-date-required-message": "Du musst ein Startdatum festlegen.",
                "o-new-project-modal-project-teams-required-message": "Du musst mindestens ein Team dem Projekt zuordnen.",
                "o-new-project-modal-project-customer-required-message": "Du musst den Namen des Kunden angeben.",
                "o-new-project-modal-project-description-required-message": "Du musst eine Projektbeschreibung verfassen.",
                "o-new-project-modal-start-date": "Start Datum",
                "o-new-project-modal-start-date-placeholder": "Datum Wählen",
                "o-new-project-modal-assigned-teams": "Zugeordnete Teams",
                "o-new-project-modal-assigned-teams-placeholder": "Teams Auswählen",
                "o-new-project-modal-customer": "Kunde",
                "o-new-project-modal-customer-placeholder": "Kundenname Eingeben",
                "o-new-project-modal-project-description": "Projekt Beschreibung",
                "o-new-project-modal-project-description-placeholder": "Beschreibe, um was es in diesem Projekt geht",
                "o-new-project-modal-footer-submit": "Neues Projekt Erstellen",
                "o-new-project-modal-footer-cancel": "Abbrechen",

                "o-new-phase-modal-title": "Neue Phase Erstellen",
                "o-new-phase-modal-phase-name": "Projektphasenname",
                "o-new-phase-modal-phase-name-placeholder": "Name für die Phase wählen",
                "o-new-phase-modal-phase-dependency": "Abhängigkeiten",
                "o-new-phase-modal-phase-dependency-placeholder": "Schlüsselphase wählen",
                "o-new-phase-modal-phase-start-date": "Start Datum",
                "o-new-phase-modal-phase-end-date": "End Datum",
                "o-new-phase-modal-footer-submit": "Neue Phase Anlegen",
                "o-new-phase-modal-footer-cancel": "Abbrechen",

                "o-new-timeframe-modal-workweek": "Wochenarbeitszeit",

                "o-edit-project-info-modal-title": "Projekt Informationen anpassen",
                "o-edit-project-info-modal-cancel": "Abbrechen",
                "o-edit-project-info-modal-submit": "Änderungen speichern",
                "o-edit-timeframe-modal-delete": "Zeitraum löschen",
                "o-edit-timeframe-modal-workweek": "Wochenstunden anpassen",
            
                "o-navigation-overview": "Übersicht",
                "o-navigation-projects": "Projekte",
                "o-navigation-employees": "Mitarbeitende",
                "o-navigation-settings": "Einstellungen",
                "o-navigation-logout": "Ausloggen",

                "o-project-card-date-undefined": "Datum nicht festgelegt",
                "o-project-card-no-employees": "Keine Mitarbeitenden zugewiesen",
                "o-project-card-employees": "Mitarbeitende",
                "o-project-card-no-phases": "Keine Phasen definiert",

                "o-employee-card-workweek": "Stunden/Woche",

                "o-project-description-title": "Projektbeschreibung",
                "o-project-description-placeholder": "Beschreibe, um was es in diesem Projekt geht",
                
                "o-project-toolbar-teams": "Teams",
                "o-project-toolbar-draft": "ENTWURF",
                "o-project-toolbar-ongoing": "LAUFEND",
                "o-project-toolbar-completed": "ABGESCHLOSSEN",
                "o-project-toolbar-archived": "ARCHIVIERT",
                "o-planning-toolbar-team": "Team",
                "o-planning-toolbar-capacity-allocation": "Personal-Kapazitäts-Zuweisung",

                "o-project-infobar-startdate": "Startdatum",
                "o-project-infobar-startdate-undefined": "Kein Datum Definiert",
                "o-project-infobar-enddate": "Enddatum",
                "o-project-infobar-enddate-undefined": "Kein Datum Definiert",
                "o-project-infobar-customer": "Kunde",
                "o-project-infobar-customer-undefined": "Kein Kunde Definiert",
                "o-project-infobar-phases": "Phasen",
                "o-project-infobar-phases-undefined": "Keine Phasen Definiert",
                "o-project-infobar-edit": "Infos Bearbeiten",

                "o-navigation-width": "140px",

                "calculate-time-estimation": "Zeitschätzung Berechnen",

                "p-project-add-project-button": "Projekt Hinzufügen",
                "p-projects-overview-title": "Projektübersicht",
                "p-project-button-switch-left": "Projektübersicht",
                "p-project-button-switch-right": "Projektplanung",
                "p-project-defautl-banner": "https://res.cloudinary.com/dubyrwfam/image/upload/v1688232113/proWorkforce/DALL_E_2023-07-01_19.20.03_-_a_default_banner_image_for_a_project_development_tool_ysohao.png",
            
                "p-phase-page-header-title": "Projektplanung",
                "p-phase-page-header-title-subtitle": "zurück zur Projektübersicht",
            }
        }
    },
    lng: "de",
    fallbackLng: "de",

    interpolation: {
      escapeValue: false
    }
});

export default i18n;