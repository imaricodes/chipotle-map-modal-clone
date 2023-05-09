import { v4 as uuid } from 'uuid';

export const createSessionToken = () => {
    const sessionToken = uuid();
    return sessionToken;
}