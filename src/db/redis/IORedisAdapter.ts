/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import type { Account as AdapterAccount, User, Session } from "next-auth";
// import type { Adapter, VerificationToken } from "next-auth/adapters";
// import { v4 as uuid } from "uuid";
// import type { Redis } from "ioredis";

// export interface IORedisAdapterOptions {
//   baseKeyPrefix?: string;
//   userKeyPrefix?: string;
//   accountKeyPrefix?: string;
//   accountByUserIdPrefix?: string;
//   sessionKeyPrefix?: string;
//   sessionByUserIdPrefix?: string;
//   userByEmailKeyPrefix?: string;
//   verificationKeyPrefix?: string;
// }

// export const defaultOptions: IORedisAdapterOptions = {
//   baseKeyPrefix: "",
//   userKeyPrefix: "user:",
//   accountKeyPrefix: "account:",
//   accountByUserIdPrefix: "account:user:",
//   sessionKeyPrefix: "session:",
//   sessionByUserIdPrefix: "session:user:",
//   userByEmailKeyPrefix: "user:email:",
//   verificationKeyPrefix: "verification:",
// };

// const isEmpty = (obj: Record<string, string>) => {
//   for (const x in obj) {
//     return false;
//   }
//   return true;
// };

// const isoDateRE =
//   /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const isDate = (value: any) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return value && isoDateRE.test(value) && !isNaN(Date.parse(value));
// };

// export function IORedisAdapter(
//   client: Redis,
//   options: IORedisAdapterOptions = {},
// ): Adapter {
//   const currentOptions = {
//     ...defaultOptions,
//     ...options,
//   };

//   const baseKeyPrefix = currentOptions.baseKeyPrefix || "";
//   const userKeyPrefix = baseKeyPrefix + currentOptions.userKeyPrefix;
//   const userByEmailKeyPrefix =
//     baseKeyPrefix + currentOptions.userByEmailKeyPrefix;
//   const accountKeyPrefix = baseKeyPrefix + currentOptions.accountKeyPrefix;
//   const accountByUserIdPrefix =
//     baseKeyPrefix + currentOptions.accountByUserIdPrefix;
//   const sessionKeyPrefix = baseKeyPrefix + currentOptions.sessionKeyPrefix;
//   const sessionByUserIdPrefix =
//     baseKeyPrefix + currentOptions.sessionByUserIdPrefix;
//   const verificationKeyPrefix =
//     baseKeyPrefix + currentOptions.verificationKeyPrefix;

//   const getUserByEmailKey = (email: string) => userByEmailKeyPrefix + email;
//   const getUserKey = (userId: string) => userKeyPrefix + userId;

//   const getAccountKey = (accountId: string) => accountKeyPrefix + accountId;
//   const getAccountByUserIdKey = (userId: string) =>
//     accountByUserIdPrefix + userId;
//   const getAccountId = (providerAccountId: string, provider: string) =>
//     `${provider}:${providerAccountId}`;

//   const getSessionKey = (sessionId: string) => sessionKeyPrefix + sessionId;
//   const getSessionByUserIdKey = (userId: string) =>
//     sessionByUserIdPrefix + userId;

//   const getVerificationKey = (tokenId: string) =>
//     verificationKeyPrefix + tokenId;

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const setObjectAsHash = async (key: string, object: any) => {
//     const newObject = Object.entries(object).reduce((acc, [key, val]) => {
//       acc[key] = val instanceof Date ? val.toISOString() : val;
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       return acc;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     }, {} as any);
//     await client.hset(key, newObject);
//   };

//   const loadObjectFromHash = async (key: string) => {
//     const object = await client.hgetall(key);
//     if (!object || isEmpty(object)) return null;
//     const newObject = Object.entries(object).reduce((acc, [key, val]) => {
//       acc[key] = isDate(val) ? new Date(val) : val;
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       return acc;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     }, {} as any);
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//     return newObject;
//   };

//   const setUser = async (id: string, user: User): Promise<User> => {
//     await setObjectAsHash(getUserKey(id), user);
//     if (user.email) await client.set(getUserByEmailKey(user.email), id);
//     return user;
//   };

//   const getUser = async (id: string) => {
//     const user = await loadObjectFromHash(getUserKey(id));
//     if (!user) return null;
//     return { ...user } as User;
//   };

//   const setAccount = async (id: string, account: AdapterAccount) => {
//     const accountKey = getAccountKey(id);
//     await setObjectAsHash(accountKey, account);
//     await client.set(getAccountByUserIdKey(account.userId), accountKey);
//     return account;
//   };

//   const getAccount = async (id: string) => {
//     const account = await loadObjectFromHash(getAccountKey(id));
//     if (!account) return null;
//     return { ...account } as AdapterAccount;
//   };

//   const deleteAccount = async (id: string) => {
//     const key = getAccountKey(id);
//     const account = await loadObjectFromHash(key);
//     if (!account) return null;
//     await client.hdel(key);
//     await client.del(getAccountByUserIdKey(account.userId));
//   };

//   const setSession = async (id: string, session: Session) => {
//     const sessionKey = getSessionKey(id);
//     await setObjectAsHash(sessionKey, session);
//     await client.set(
//       getSessionByUserIdKey(session.user.subscriber?.fxa_uid || ""),
//       sessionKey,
//     );
//     return session;
//   };

//   const getSession = async (id: string) => {
//     const session = await loadObjectFromHash(getSessionKey(id));
//     if (!session) return null;
//     return session as Session;
//   };

//   const deleteSession = async (sessionToken: string) => {
//     const session = await getSession(sessionToken);
//     if (!session) return null;
//     const key = getSessionKey(sessionToken);
//     await client.del(key);
//     await client.del(
//       getSessionByUserIdKey(session.user.subscriber?.fxa_uid || ""),
//     );
//   };

//   const setVerificationToken = async (id: string, token: VerificationToken) => {
//     const tokenKey = getVerificationKey(id);
//     await setObjectAsHash(tokenKey, token);
//     return token;
//   };

//   const getVerificationToken = async (id: string) => {
//     const tokenKey = getVerificationKey(id);
//     const token = await loadObjectFromHash(tokenKey);
//     if (!token) return null;
//     return { identifier: token.identifier, ...token } as VerificationToken;
//   };

//   const deleteVerificationToken = async (id: string) => {
//     const tokenKey = getVerificationKey(id);
//     await client.del(tokenKey);
//   };

//   return {
//     async createUser(user: User) {
//       const id = uuid();
//       return await setUser(id, { ...user, id });
//     },
//     getUser,
//     async getUserByEmail(email) {
//       const userId = await client.get(getUserByEmailKey(email));
//       if (!userId) return null;
//       return await getUser(userId);
//     },
//     async getUserByAccount({ providerAccountId, provider }) {
//       const account = await getAccount(
//         getAccountId(providerAccountId, provider),
//       );
//       if (!account) return null;
//       return await getUser(account.userId);
//     },

//     async updateUser(updates: User) {
//       const userId = updates.id;
//       const user = await getUser(userId);
//       return await setUser(userId, { ...(user as User), ...updates });
//     },
//     async deleteUser(userId) {
//       const user = await getUser(userId);
//       if (!user) return null;
//       const accountKey = await client.get(getAccountByUserIdKey(userId));
//       const sessionKey = await client.get(getSessionByUserIdKey(userId));
//       await client.del(
//         getUserByEmailKey(user.email),
//         getAccountByUserIdKey(userId),
//         getSessionByUserIdKey(userId),
//       );
//       if (sessionKey) await client.del(sessionKey);
//       if (accountKey) await client.del(accountKey);
//       await client.del(getUserKey(userId));
//       return;
//     },
//     async linkAccount(account) {
//       const id = getAccountId(account.providerAccountId, account.provider);
//       return await setAccount(id, { ...account, id });
//     },
//     async unlinkAccount({ providerAccountId, provider }) {
//       const id = getAccountId(providerAccountId, provider);
//       await deleteAccount(id);
//     },
//     async createSession(session: Session) {
//       const id = session.sessionToken;
//       return await setSession(id, { ...session, id });
//     },
//     async getSessionAndUser(sessionToken) {
//       const id = sessionToken;
//       const session = await getSession(id);
//       if (!session) return null;
//       const user = await getUser(session.user.subscriber?.fxa_uid);
//       if (!user) return null;
//       return { session, user };
//     },
//     async updateSession(updates: Session) {
//       const id = updates.sessionToken;
//       const session = await getSession(id);
//       if (!session) return null;
//       return await setSession(id, { ...session, ...updates });
//     },
//     deleteSession,
//     async createVerificationToken(verificationToken) {
//       const id = verificationToken.identifier;
//       await setVerificationToken(id, verificationToken);
//       return verificationToken;
//     },
//     async useVerificationToken(verificationToken) {
//       const id = verificationToken.identifier;
//       const token = await getVerificationToken(id);
//       if (!token || verificationToken.token !== token.token) return null;
//       await deleteVerificationToken(id);
//       return token;
//     },
//   };
// }
