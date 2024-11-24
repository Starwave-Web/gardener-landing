"use client"

import { scrollToSection } from "@/src/lib/utils";
import React from "react";
import { Button, type ButtonProps } from "./button";
import { SECTIONS } from "@/src/constants";

const GetQuoteButton = (props: ButtonProps) => {
  return (
    <Button {...props} onClick={() => scrollToSection(SECTIONS.CONTACT_US)}>Ajánlatkérés</Button>
  );
};

export default GetQuoteButton;
