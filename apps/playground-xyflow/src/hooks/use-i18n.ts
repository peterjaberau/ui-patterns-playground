import I18n from "@/context/i18n";
import { useContext } from "react";

export const useLanguage = () => {
  // @ts-ignore
  const { locale } = useContext(I18n);

  return locale.replace("-", "_");
};

export const renderI18nObject = (obj: Record<string, string>, language: string) => {
  if (!obj) return "";
  if (obj?.[language]) return obj[language];
  if (obj?.en_US) return obj.en_US;
  return Object.values(obj)[0];
};

export const useRenderI18nObject = () => {
  const language = useLanguage();
  return (obj: Record<string, string>) => {
    return renderI18nObject(obj, language);
  };
};
