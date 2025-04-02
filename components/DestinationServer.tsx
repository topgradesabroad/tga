// components/DestinationServer.tsx
import TopDestinations from "./TopDestinations";
import { Destination } from "@/data/destinations";

interface DestinationServerProps {
  activeDestination: Destination;
}

export default function DestinationServer({ activeDestination }: DestinationServerProps) {
  return <TopDestinations activeDestination={activeDestination} />;
}
