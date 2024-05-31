"use client";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import heroBg from "@/assets/hero-bg.png";
import heroImg from "@/assets/hero-img.png";

export function Hero() {
  return (
    <div className="relative w-full h-[544px] overflow-hidden">
      <Container>
        <section className="relative w-full h-[544px] flex items-center justify-between z-10">
          <div className="max-w-[650px] w-full flex flex-col justify-center gap-[66px]">
            <div className="max-w-[600px] w-full space-y-4">
              <h1 className="title-xl font-baloo2 text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-base-subtitle text-xl font-normal">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              <Item
                title="Compra simples e segura"
                color="bg-brand-yellow-dark"
              >
                <ShoppingCart weight="fill" className="text-white" size={16} />
              </Item>

              <Item
                title="Embalagem mantém o café intacto"
                color="bg-base-text"
              >
                <Package weight="fill" className="text-white" size={16} />
              </Item>

              <Item title="Entrega rápida e rastreada" color="bg-brand-yellow">
                <Timer weight="fill" className="text-white" size={16} />
              </Item>

              <Item
                title="O café chega fresquinho até você"
                color="bg-brand-purple"
              >
                <Coffee weight="fill" className="text-white" size={16} />
              </Item>
            </div>
          </div>
          <Image
            src={heroImg}
            alt="imagem de um copo de café escrito coffee delivery"
            className="w-[476px] h-[360px]"
          />
        </section>
      </Container>

      <Image
        src={heroBg}
        alt=""
        className="absolute top-0 w-full z-0  hero-shadow"
      />
    </div>
  );
}

interface ItemProps {
  title: string;
  children: React.ReactNode;
  color: string;
}

function Item({ children, title, color }: ItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          color
        )}
      >
        {children}
      </div>

      <span className="text-base-text">{title}</span>
    </div>
  );
}
