"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import type { Area } from "@/data/areas";

export type MapPoint = Pick<Area, "slug" | "name" | "lat" | "lng"> & { summary?: string; href?: string };

type Props = {
  points: MapPoint[];
  active?: string | null;
  onActiveChange?: (slug: string | null) => void;
  /** When set, the map flies to this point and opens its popup. */
  selected?: string | null;
  /** Initial zoom when showing a single focus point. */
  focus?: string;
  className?: string;
};

// Esri Dark Gray Canvas: keyless, monochrome. Swap for a keyed provider here if traffic grows.
const TILES = {
  base: "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  labels: "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
  attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
  maxZoom: 16,
};

function markerIcon(name: string, active: boolean, muted: boolean) {
  return L.divIcon({
    className: `ee-marker${active ? " is-active" : ""}`,
    html: `<span class="ring"></span><span class="dot"${muted ? ' style="opacity:.45"' : ""}></span><span class="label">${name}</span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -14],
  });
}

function FitAll({ points, focus }: { points: MapPoint[]; focus?: string }) {
  const map = useMap();
  useEffect(() => {
    const f = focus && points.find((p) => p.slug === focus);
    if (f) {
      map.setView([f.lat, f.lng], 14);
    } else {
      map.fitBounds(L.latLngBounds(points.map((p) => [p.lat, p.lng])), { paddingTopLeft: [40, 40], paddingBottomRight: [130, 40] });
    }
  }, [map, points, focus]);
  return null;
}

/** Enable wheel zoom only after the user engages with the map, to avoid hijacking page scroll. */
function WheelGuard() {
  const map = useMapEvents({
    click: () => map.scrollWheelZoom.enable(),
    mouseout: () => map.scrollWheelZoom.disable(),
  });
  return null;
}

function FlyTo({ point, markers }: { point?: MapPoint; markers: React.RefObject<Record<string, L.Marker | null>> }) {
  const map = useMap();
  useEffect(() => {
    if (!point) return;
    map.flyTo([point.lat, point.lng], Math.max(map.getZoom(), 13), { duration: 1.1, easeLinearity: 0.2 });
    const t = setTimeout(() => markers.current?.[point.slug]?.openPopup(), 900);
    return () => clearTimeout(t);
  }, [map, point, markers]);
  return null;
}

export default function AreaMap({ points, active, onActiveChange, selected, focus, className }: Props) {
  const markers = useRef<Record<string, L.Marker | null>>({});
  const center = useMemo<[number, number]>(() => [23.035, 72.49], []);
  const selectedPoint = points.find((p) => p.slug === selected);

  return (
    <MapContainer
      center={center}
      zoom={12}
      minZoom={11}
      maxZoom={17}
      scrollWheelZoom={false}
      zoomControl
      attributionControl
      className={className}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url={TILES.base} attribution={TILES.attribution} maxNativeZoom={TILES.maxZoom} className="ee-tiles" />
      <TileLayer url={TILES.labels} maxNativeZoom={TILES.maxZoom} opacity={0.4} className="ee-tiles" />
      <FitAll points={points} focus={focus} />
      <WheelGuard />
      <FlyTo point={selectedPoint} markers={markers} />

      {points.map((p) => {
        const isActive = active === p.slug || focus === p.slug;
        const muted = Boolean(focus && focus !== p.slug);
        return (
          <Marker
            key={p.slug}
            position={[p.lat, p.lng]}
            icon={markerIcon(p.name, isActive, muted)}
            title={p.name}
            ref={(m) => {
              markers.current[p.slug] = m;
            }}
            eventHandlers={{
              mouseover: () => onActiveChange?.(p.slug),
              mouseout: () => onActiveChange?.(null),
            }}
          >
            <Popup closeButton={false} autoPanPadding={[40, 40]}>
              <div className="p-5">
                <p className="eyebrow text-slate">Ahmedabad</p>
                <p className="mt-2 font-serif text-2xl leading-tight text-ink">{p.name}</p>
                {p.summary && <p className="mt-2 text-[0.8rem] leading-relaxed text-slate">{p.summary}</p>}
                {p.href && (
                  <Link
                    href={p.href}
                    className="mt-4 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.65rem] uppercase tracking-[0.22em] !text-ink"
                  >
                    Explore area &rarr;
                  </Link>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
