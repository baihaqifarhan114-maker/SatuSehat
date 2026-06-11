'use client';

import { kpiData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Clock,
  ListOrdered,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Card 1: Pasien Hari Ini */}
      <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow border-0 bg-white">
        <CardContent className="flex items-center gap-4 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
            <Users className="h-6 w-6 text-teal-600" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold tracking-tight text-gray-900">
              {kpiData.pasienHariIni}
            </p>
            <p className="text-xs font-medium text-gray-500">
              Pasien Hari Ini
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Card 2: Rata-rata Waktu Sistem */}
      <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow border-0 bg-white">
        <CardContent className="flex items-center gap-4 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
            <Clock className="h-6 w-6 text-teal-600" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold tracking-tight text-gray-900">
              {kpiData.rataWaktuSistem}{' '}
              <span className="text-sm font-semibold text-gray-500">menit</span>
            </p>
            <p className="text-[11px] font-medium text-emerald-600">
              ↓ turun dari {kpiData.rataWaktuSebelum} mnt sebelum digitalisasi
            </p>
            <p className="text-xs font-medium text-gray-500">
              Rata-rata Waktu Sistem
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Antrian Aktif */}
      <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow border-0 bg-white">
        <CardContent className="flex items-center gap-4 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50">
            <ListOrdered className="h-6 w-6 text-amber-600" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold tracking-tight text-gray-900">
              {kpiData.antrianAktif}
            </p>
            <p className="text-xs font-medium text-gray-500">Antrian Aktif</p>
          </div>
        </CardContent>
      </Card>

      {/* Card 4: Throughput */}
      <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow border-0 bg-white">
        <CardContent className="flex items-center gap-4 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
            <TrendingUp className="h-6 w-6 text-teal-600" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold tracking-tight text-gray-900">
              {kpiData.throughput}{' '}
              <span className="text-sm font-semibold text-gray-500">
                pasien/jam
              </span>
            </p>
            <p className="text-xs font-medium text-gray-500">Throughput</p>
          </div>
        </CardContent>
      </Card>

      {/* Card 5: SatuSehat Sync */}
      <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow border-0 border-l-4 border-l-emerald-500 bg-white">
        <CardContent className="flex items-center gap-4 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold tracking-tight text-gray-900">
              {kpiData.satuSehatStatus}
            </p>
            <p className="text-[11px] font-medium text-gray-400">
              terakhir {kpiData.satuSehatLastSync}
            </p>
            <p className="text-xs font-medium text-gray-500">
              Sinkronisasi SatuSehat
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
