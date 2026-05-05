import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Romsey",
  href: "/",
};

const LOCATION_NAMES = [
  "North Baddesley",
  "Chandler's Ford",
  "Bishop's Waltham",
  "Stockbridge",
  "Fordingbridge",
  "Totton",
] as const;

export const nearbyLocationLinks = LOCATION_NAMES.map((label) => ({
  label,
  href: `/${slugifyLocation(label)}`,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentSlug = currentLocationLabel ? slugifyLocation(currentLocationLabel) : "";
  const filteredNearbyLinks = nearbyLocationLinks.filter(
    (location) => location.href !== `/${currentSlug}`,
  );

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_NAMES.map((label, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}));
