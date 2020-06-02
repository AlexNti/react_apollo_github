
class Storage {
  constructor(storageInstance) {
    this.storageInstance = storageInstance;
  }


  write(key, data) {
    const storedShape = data instanceof Object ? JSON.stringify(data) : data;
    this.storageInstance.setItem(key, storedShape);
  }

  read(key) {
    const data = this.storageInstance.getItem(key);
    if (data === null) {
      return null;
    }

    try {
      return JSON.parse(this.storageInstance.getItem(key));
    } catch (e) {
      return data;
    }
  }


  delete(key) {
    this.storageInstance.removeItem(key);
  }

  clear() {
    this.storageInstance.clear();
  }
}

const local = new Storage(localStorage);

const storage = { local };

export default storage;
