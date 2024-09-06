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

export const courses = [
  {
    id: 1,
    name: "Mathematics",
    time: "Mañana",
    status: 20,
  },
  {
    id: 2,
    name: "Physics",
    time: "Tarde",
    status: 25,
  },
  {
    id: 3,
    name: "Chemistry",
    time: "Noche",
    status: 59,
  },
];