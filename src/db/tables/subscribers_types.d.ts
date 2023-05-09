// This file contains types for subscribers.js until it's fully typed

export type SubscriberRow = {
  id: number;
  sha1: string;
  email: string;
  verification_token: string;
  verified: boolean;
  onerep_profile_id?: number;
}
