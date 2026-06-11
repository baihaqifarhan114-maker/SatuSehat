'use client';

import {
  ClipboardList,
  Stethoscope,
  Pill,
  ChevronRight,
  ArrowDown,
  Users,
  UserCheck,
  Clock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { stasiunAntrian, type StasiunAntrian } from '@/lib/data';

const stationIcons: Record<string, React.ReactNode> = {
  loket: <ClipboardList className="size-5 text-teal-600" />,
  dokter: <Stethoscope className="size-5 text-teal-600" />,
  farmasi: <Pill className="size-5 text-teal-600" />,
};

function StationCard({ station }: { station: StasiunAntrian }) {
  const isServing = station.sedangDilayani !== null;

  return (
    <Card
      className={`
        relative flex-1 min-w-0 rounded-xl border-t-4 border-teal-500 shadow-sm
        transition-shadow duration-200
        ${isServing ? 'ring-2 ring-teal-400/40 shadow-md' : ''}
      `}
    >
      <CardHeader className="gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-teal-50 p-2">
            {stationIcons[station.nama]}
          </div>
          <CardTitle className="text-base font-semibold text-gray-900">
            {station.label}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Mengantri */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="size-4 text-gray-400" />
          <span>
            Mengantri:{' '}
            <span className="font-semibold text-gray-900">
              {station.mengantri} pasien
            </span>
          </span>
        </div>

        {/* Sedang dilayani */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <UserCheck className="size-4 text-gray-400" />
          <span>
            Sedang dilayani:{' '}
            {station.sedangDilayani ? (
              <span className="font-semibold text-teal-700">
                {station.sedangDilayani}
              </span>
            ) : (
              <span className="italic text-gray-400">Tidak ada</span>
            )}
          </span>
        </div>

        {/* Rata-rata waktu layanan */}
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-teal-500" />
          <span className="text-sm text-gray-600">Rata-rata:</span>
          <span className="text-lg font-bold text-teal-700">
            {station.rataWaktuLayan}
          </span>
        </div>

        {/* Catatan */}
        {station.catatan && (
          <p className="mt-1 text-xs font-medium text-green-600">
            ✦ {station.catatan}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function ArrowConnector() {
  return (
    <>
      {/* Desktop: horizontal arrow */}
      <div className="hidden md:flex items-center justify-center px-1">
        <ChevronRight className="size-7 text-teal-500" strokeWidth={2.5} />
      </div>
      {/* Mobile: vertical arrow */}
      <div className="flex md:hidden items-center justify-center py-1">
        <ArrowDown className="size-7 text-teal-500" strokeWidth={2.5} />
      </div>
    </>
  );
}

export default function QueueBoard() {
  return (
    <section className="space-y-5">
      {/* Section header */}
      <h2 className="text-lg font-bold text-gray-800 tracking-tight">
        Papan Antrian — Alur Pelayanan
      </h2>

      {/* Station cards with arrow connectors */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-2">
        {stasiunAntrian.map((station, index) => (
          <div
            key={station.nama}
            className="flex flex-col md:flex-row items-center md:items-stretch w-full md:w-auto md:flex-1 gap-2"
          >
            <StationCard station={station} />
            {index < stasiunAntrian.length - 1 && <ArrowConnector />}
          </div>
        ))}
      </div>
    </section>
  );
}
