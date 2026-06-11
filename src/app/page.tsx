import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import KpiCards from "@/components/KpiCards";
import QueueBoard from "@/components/QueueBoard";
import PatientTable from "@/components/PatientTable";
import ImpactPanel from "@/components/ImpactPanel";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <Header />

        {/* Body */}
        <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Section 1 — KPI Cards */}
          <section id="kpi-cards" aria-label="Indikator Kinerja Utama">
            <KpiCards />
          </section>

          {/* Section 2 — Queue Board */}
          <section id="queue-board" aria-label="Papan Antrian">
            <QueueBoard />
          </section>

          {/* Section 3 — Patient Table + Impact Panel side by side on large screens */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <section
              id="patient-table"
              className="xl:col-span-2"
              aria-label="Tabel Pasien"
            >
              <PatientTable />
            </section>

            <section id="impact-panel" aria-label="Panel Dampak Digitalisasi">
              <ImpactPanel />
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-100 px-6 py-3">
          <p className="text-xs text-gray-400 text-center">
            © 2026 Klinik Arjawinangun Sehat — Sistem ERP RME Terintegrasi
            SatuSehat | Prototipe Usulan 2: Digitalisasi Penuh
          </p>
        </footer>
      </div>
    </div>
  );
}
