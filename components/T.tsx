"use client";

import { useI18n } from "./I18nContext";

interface TProps {
  k: string;
  fallback?: string;
}

export default function T({ k, fallback }: TProps) {
  const { t } = useI18n();
  return <>{t(k, fallback)}</>;
}
