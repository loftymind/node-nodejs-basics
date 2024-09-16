export const parseEnv = () => {
  const v = Object.entries(process.env).reduce((en, [key, value]) => {
    if (key.startsWith('RSS_')) {
      en.push(`${key}=${value}`);
    }
    return en;
  }, []);
  console.log(v.join('; '));
};
parseEnv();
