import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store, StoreData } from "@/infra/adapters";

export const AsyncStorageStore: Store = {
	get: async (key: string): Promise<any | null> =>  {
		const savedData = await AsyncStorage.getItem(key);

		if(savedData) {
			const parsedData: StoreData = JSON.parse(savedData);

			if(!parsedData.expiration || (parsedData.expiration && parsedData.expiration > Date.now())){
				return parsedData.data;
			}
			return null
		}
		// await AsyncStorage.removeItem(key);
		return null;
	},

	set: async (key: string, data: StoreData): Promise<void> =>  {
		await AsyncStorage.setItem(key, JSON.stringify(data))
	},

	remove: async (key: string): Promise<void> =>  {
		await AsyncStorage.removeItem(key)
	}
}
