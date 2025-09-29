
import { AsyncStorageStore } from './async-storage';

export interface Store {
	get: (key: string) => Promise<any | null> ;
	set: (key: string, data: StoreData) => Promise<void>;
	remove: (key: string) => Promise<void>;
}

export type StoreData = {
	expiration?: number;
	data: any;
}

export const storage: Store = AsyncStorageStore;
