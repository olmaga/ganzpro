import { createFileRoute } from "@tanstack/react-router";
import Shows from "@/pages/Shows";

export const Route = createFileRoute("/shows")({
  component: Shows,
});
