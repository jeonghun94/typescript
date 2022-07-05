interface SStorage<S> {
  [ket: string]: S;
}

class LocalStorage<S> {
  private storage: SStorage<S> = {};

  set(key: string, value: S) {
    this.storage[key] = value;
  }
  get(key: string) {
    return this.storage[key];
  }
}

const tlocalStorage = new LocalStorage<string>();
tlocalStorage.set("name", "John");

console.log(tlocalStorage.get("name"));
