"use client"

import { scrollToSection } from "@/lib/utils";
import React from "react";
import { Button, type ButtonProps } from "./button";

const GetQuoteButton = (props: ButtonProps) => {
  return (
    <Button {...props} onClick={() => scrollToSection("contactUs")}>Ajánlatkérés</Button>
  );
};

export default GetQuoteButton;
