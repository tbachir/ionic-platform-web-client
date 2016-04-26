import { IonicPlatform } from "../core/core";
export class BucketStorage {
    constructor(name) {
        this.name = name;
        this.baseStorage = IonicPlatform.getStorage();
    }
    get(key) {
        return this.baseStorage.retrieveObject(this.scopedKey(key));
    }
    set(key, value) {
        return this.baseStorage.storeObject(this.scopedKey(key), value);
    }
    scopedKey(key) {
        return this.name + '_' + key + '_' + IonicPlatform.config.get('app_id');
    }
}
