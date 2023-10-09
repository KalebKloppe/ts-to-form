export type User = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: any;
  answers: Answer[];
  eligibleCases: {
    caseID: string;
  }[];
  settings: {
    notifications: SettingsNotifications;
    accessibility: SettingsAccessibility;
  };
};

type Answer = {
  questionID: string;
  response: any;
};

export type SettingsAccessibility = {
  darkMode: boolean;
};

export type SettingsNotifications = {
  notificationsEmail: boolean;
  notificationsSMS: boolean;
};

export type CategoriesType = "General" | "Notifications" | "Accessibility";
