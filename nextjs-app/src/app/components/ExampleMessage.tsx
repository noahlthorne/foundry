// src/app/components/ExampleMessage.tsx
import React from "react";
import { getExampleMessage } from "@/services/apiService";

export default async function ExampleMessage() {
  const message = await getExampleMessage();
  return <p>{message}</p>;
}
