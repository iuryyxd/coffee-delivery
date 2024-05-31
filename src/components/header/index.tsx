import Image from "next/image";
import BrandLogo from "@/assets/brand-logo.png";
import { Container } from "../container";
import { Cart } from "./cart";
import { UserLocation } from "./user-location";

export function Header() {
  return (
    <Container>
      <header className="w-full max-h-[104px] py-8 pb-10 flex items-center justify-between">
        <Image
          src={BrandLogo}
          alt="imagem de um café e ao lado escrito: coffee delivery"
        />

        <div className="flex items-center gap-3">
          <UserLocation />
          <Cart />
        </div>
      </header>
    </Container>
  );
}
