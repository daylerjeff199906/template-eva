"use client";

import {
  CircleIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons"


export const courseStatuses = [
  {
    value: "completed",
    label: "Completado",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "pending",
    label: "Pendiente",
    icon: CircleIcon,
  }
]
