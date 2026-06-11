'use client'

import { pasienHariIni } from '@/lib/data'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Patient {
  noAntrian: string
  nama: string
  noRM: string
  stasiun: string
  status: string
  waktuMasuk: string
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'Terdaftar':
      return (
        <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
          Terdaftar
        </Badge>
      )
    case 'Di Loket':
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          Di Loket
        </Badge>
      )
    case 'Menunggu Dokter':
      return (
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
          Menunggu Dokter
        </Badge>
      )
    case 'Di Dokter':
      return (
        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">
          Di Dokter
        </Badge>
      )
    case 'Di Farmasi':
      return (
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
          Di Farmasi
        </Badge>
      )
    case 'Selesai':
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Selesai
        </Badge>
      )
    default:
      return (
        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
          {status}
        </Badge>
      )
  }
}

export default function PatientTable() {
  const patients: Patient[] = pasienHariIni

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle className="text-lg font-semibold">
            Pasien Hari Ini
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {patients.length} pasien
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="w-[100px] font-semibold">
                No. Antrian
              </TableHead>
              <TableHead className="font-semibold">Nama</TableHead>
              <TableHead className="font-semibold">No. RM</TableHead>
              <TableHead className="font-semibold">Stasiun</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Waktu Masuk</TableHead>
              <TableHead className="text-right font-semibold">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow
                key={patient.noAntrian}
                className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
              >
                <TableCell className="font-medium">
                  {patient.noAntrian}
                </TableCell>
                <TableCell>{patient.nama}</TableCell>
                <TableCell className="font-mono text-sm">
                  {patient.noRM}
                </TableCell>
                <TableCell>{patient.stasiun}</TableCell>
                <TableCell>{getStatusBadge(patient.status)}</TableCell>
                <TableCell>{patient.waktuMasuk}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1.5 text-xs"
                    onClick={() =>
                      toast.info(
                        `Membuka Rekam Medis Elektronik: ${patient.nama}`
                      )
                    }
                  >
                    <FileText className="h-3.5 w-3.5" />
                    Buka RME
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
