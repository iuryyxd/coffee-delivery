"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Counter } from "./counter";
import { ShoppingCart } from "phosphor-react";

interface CoffeeCardProps {
  title: string;
  description: string;
  tags: string[];
  src: string;
  price: number;
}

export function CoffeeCard({
  description,
  price,
  src,
  tags,
  title,
}: CoffeeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center">
        <Image
          className="-mt-10"
          src={src}
          alt={title}
          width={120}
          height={120}
        />
        <div className="space-x-1">
          {tags.map((tag, i) => (
            <CardBadge key={`${tag}-${i}`} content={tag} />
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-sm text-base-text">
          R$ <span className="title-md font-baloo2">9,90</span>
        </p>
        <div className="flex items-center gap-2">
          <Counter />
          <button className="px-2 h-[32px] bg-brand-purple-dark rounded-md">
            <ShoppingCart weight="fill" className="text-base-card" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function CardBadge({ content }: { content: string }) {
  return <Badge className="mt-3 mb-4">{content}</Badge>;
}
