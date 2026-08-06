import {
  getServices as fetchServices,
  getFeaturedServices as fetchFeaturedServices,
} from "../lib/queries/services";
import type { ServiceDoc } from "../lib/queries/services";

export type Service = {
  id: string;
  title: string;
  icon: string;
  accent: string;
  description: string;
  reveal: string;
  price: string;
  features: string[];
  image: string;
  bentoSize: "large" | "tall" | "wide" | "small";
};

function resolveImageUrl(image: ServiceDoc["image"]): string {
  return typeof image === "string" ? image : image?.url ?? "";
}

function mapService(doc: ServiceDoc): Service {
  return {
    id: doc.slug,
    title: doc.title,
    icon: doc.icon,
    accent: doc.accentColor,
    description: doc.description,
    reveal: doc.bentoReveal ?? "",
    price: doc.priceFrom,
    features: doc.features.map((f) => f.feature),
    image: resolveImageUrl(doc.image),
    bentoSize: doc.bentoSize,
  };
}

/**
 * Was a static `services` array — now an async fetch from the Services
 * collection (Payload local API), cached + tagged 'services'. Await this
 * from a server component:
 *
 *   const services = await getServices();
 */
export async function getServices(): Promise<Service[]> {
  const docs = await fetchServices();
  return docs.map(mapService);
}

/** Only the services flagged `featuredOnHome` — for the home bento grid. */
export async function getFeaturedServices(): Promise<Service[]> {
  const docs = await fetchFeaturedServices();
  return docs.map(mapService);
}
