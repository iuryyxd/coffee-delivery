"use client";
import { MapPin } from "phosphor-react";

export function UserLocation() {
  return (
    <div className="bg-brand-purple-light flex items-center gap-1 p-2 rounded-md">
      <MapPin weight="fill" size={22} className="text-brand-purple" />
      <span className="font-normal text-sm text-brand-purple-dark">
        Porto Alegre, RS
      </span>
    </div>
  );
}
