'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, UserPlus, Bell } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { daftarPasienLengkap } from '@/lib/data'

function formatTanggalIndonesia(date: Date): string {
  const hari = [
    'Minggu', 'Senin', 'Selasa', 'Rabu',
    'Kamis', 'Jumat', 'Sabtu',
  ]
  const bulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ]
  return `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`
}

export default function Header() {
  const [cariText, setCariText] = useState('')
  const [dropdownTerbuka, setDropdownTerbuka] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const tanggalHariIni = formatTanggalIndonesia(new Date())

  const hasilCari = cariText.trim().length > 0
    ? daftarPasienLengkap.filter((p) => {
        const q = cariText.toLowerCase()
        return p.nama.toLowerCase().includes(q) || p.nik.includes(q)
      })
    : []

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickLuar(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownTerbuka(false)
      }
    }
    document.addEventListener('mousedown', handleClickLuar)
    return () => document.removeEventListener('mousedown', handleClickLuar)
  }, [])

  function handlePilihPasien(pasien: typeof daftarPasienLengkap[number]) {
    toast.info('Membuka RME: ' + pasien.nama)
    setCariText('')
    setDropdownTerbuka(false)
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between gap-6 px-6 py-4">
        {/* Left — Title & Date */}
        <div className="flex shrink-0 flex-col gap-0.5">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Dashboard Operasional
          </h1>
          <p className="text-sm text-gray-500">{tanggalHariIni}</p>
        </div>

        {/* Center — Search */}
        <div ref={containerRef} className="relative w-full max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Cari pasien via NIK atau Nama..."
              value={cariText}
              onChange={(e) => {
                setCariText(e.target.value)
                setDropdownTerbuka(true)
              }}
              onFocus={() => {
                if (cariText.trim().length > 0) setDropdownTerbuka(true)
              }}
              className="h-10 rounded-xl bg-gray-50 pl-10 pr-4 text-sm shadow-sm transition-shadow focus-visible:bg-white focus-visible:shadow-md"
            />
          </div>

          {/* Dropdown Results */}
          {dropdownTerbuka && hasilCari.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 shadow-xl">
              {hasilCari.map((p) => (
                <button
                  key={p.noRM}
                  type="button"
                  onClick={() => handlePilihPasien(p)}
                  className="flex w-full items-center gap-4 px-4 py-2.5 text-left transition-colors hover:bg-teal-50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                    {p.nama.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {p.nama}
                    </p>
                    <p className="text-xs text-gray-500">
                      NIK: {p.nik} &middot; {p.noRM}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results state */}
          {dropdownTerbuka && cariText.trim().length > 0 && hasilCari.length === 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-xl">
              <p className="text-sm text-gray-500">Pasien tidak ditemukan</p>
            </div>
          )}
        </div>

        {/* Right — Actions */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Bell Notification */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Pasien Baru Button */}
          <button
            type="button"
            onClick={() =>
              toast.info('Fitur Pendaftaran Pasien Baru akan segera tersedia')
            }
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-teal-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-700 active:bg-teal-800"
          >
            <UserPlus className="h-4 w-4" />
            <span>Pasien Baru</span>
          </button>
        </div>
      </div>
    </header>
  )
}
