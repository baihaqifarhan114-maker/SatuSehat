'use client';

import {
  LayoutDashboard,
  UserPlus,
  Users,
  FileText,
  Pill,
  Package,
  BarChart3,
  Settings,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Pendaftaran', icon: UserPlus, active: false },
  { label: 'Antrian', icon: Users, active: false },
  { label: 'Rekam Medis', icon: FileText, active: false },
  { label: 'Farmasi & e-Resep', icon: Pill, active: false },
  { label: 'Inventori Obat', icon: Package, active: false },
  { label: 'Laporan', icon: BarChart3, active: false },
  { label: 'Pengaturan', icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 min-h-screen flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300 border-r border-slate-800/60 select-none">
      {/* ── Logo / Clinic identity ── */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-slate-800/60">
        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-teal-600/20 text-teal-400 shrink-0">
          <Activity className="h-5 w-5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-white tracking-wide">
            Klinik Arjawinangun
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Sehat
          </span>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Menu Utama
        </p>

        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`
              group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
              transition-all duration-200 ease-in-out cursor-pointer
              ${
                active
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20'
                  : 'text-slate-400 hover:bg-slate-800/70 hover:text-white'
              }
            `}
          >
            <Icon
              className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 ${
                active
                  ? 'text-white'
                  : 'text-slate-500 group-hover:text-teal-400'
              }`}
            />
            {label}
          </button>
        ))}
      </nav>

      {/* ── Bottom: SatuSehat badge + user profile ── */}
      <div className="mt-auto border-t border-slate-800/60 px-4 py-4 space-y-3">
        {/* SatuSehat connection badge */}
        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold text-emerald-400 tracking-wide">
            Terhubung SatuSehat
          </span>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold shrink-0 ring-2 ring-teal-500/30">
            MT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-200">
              Mba Tanti
            </span>
            <span className="text-[11px] text-slate-500">Petugas</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
