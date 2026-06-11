'use client';

import { dampakDigitalisasi } from '@/lib/data';
import type { DampakItem } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FileSearch,
  FileText,
  Pill,
  ArrowRight,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FileSearch,
  FileText,
  Pill,
};

function ImpactRow({ item }: { item: DampakItem }) {
  const Icon = iconMap[item.ikon] ?? FileText;

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-muted/20 p-4 sm:flex-row sm:items-center sm:gap-0">
      {/* Icon + Aspect label */}
      <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-semibold text-foreground">
          {item.aspek}
        </span>
      </div>

      {/* Before / Arrow / After */}
      <div className="flex flex-1 items-stretch gap-2 sm:gap-3">
        {/* Sebelum */}
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-red-200 bg-gradient-to-br from-red-50 to-red-100/60 px-4 py-3">
          <span className="inline-block rounded-full bg-red-200/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700">
            Sebelum
          </span>
          <span className="text-sm font-medium text-red-800">
            {item.sebelum}
          </span>
        </div>

        {/* Arrow */}
        <div className="flex shrink-0 items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white shadow-md shadow-teal-600/30">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Sesudah */}
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/60 px-4 py-3">
          <span className="inline-block rounded-full bg-emerald-200/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            Sesudah
          </span>
          <span className="text-sm font-medium text-emerald-800">
            {item.sesudah}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ImpactPanel() {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm">
            <Zap className="h-4 w-4" />
          </div>
          Dampak Digitalisasi — Sebelum vs Sesudah
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {dampakDigitalisasi.map((item) => (
          <ImpactRow key={item.aspek} item={item} />
        ))}
      </CardContent>
    </Card>
  );
}
