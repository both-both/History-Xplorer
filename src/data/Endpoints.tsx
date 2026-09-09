// Endpoints.tsx
const BASE_URL = "https://history.muffinlabs.com";

export const endpoints = {
  today: `${BASE_URL}/date`,
  byDate: (month: number, day: number) => `${BASE_URL}/date/${month}/${day}`,
};
