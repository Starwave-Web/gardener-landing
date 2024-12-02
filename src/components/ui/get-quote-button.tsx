"use client"

import { scrollToSection } from "@/src/lib/utils";
import React from "react";
import { Button, type ButtonProps } from "./button";
import { SECTIONS } from "@/src/constants";
import { useTranslations } from "next-intl";

const GetQuoteButton = (props: ButtonProps) => {
  const t = useTranslations('heroSection')
  return (
    <Button {...props} onClick={() => scrollToSection(SECTIONS.CONTACT_US)}>{t('getQuoteBtn')}</Button>
  );
};

export default GetQuoteButton;
