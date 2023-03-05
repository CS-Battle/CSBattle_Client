export const useLocalstorage = () => {
  const load = (key: string) => {
    if (window) {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  };

  const save = (key: string, value: any) => {
    if (window) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  /**
   * @param ttl seconds
   */
  const saveWithExpiry = (key: string, value: any, ttl: number) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl * 1000,
    };
    save(key, item);
  };

  const getWithExpiry = (key: string) => {
    const item = load(key);
    if (item === null) {
      return null;
    }
    const now = new Date();
    if (now.getTime() > item.expiry) {
      window?.localStorage.removeItem(key);
      return null;
    }
    return item.value;
  };

  return { load, save, saveWithExpiry, getWithExpiry };
};
