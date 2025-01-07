import { formatRupiah } from '@/app/utils/helpers';
import styles from '../../styles';

const columns = (page) => {
  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '65px',
      wrap: true,
    },
    {
      name: 'Service',
      selector: (row) => row.service,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    { name: 'Tahun', selector: (row) => row.tahun, sortable: true },
    { name: 'Bulan', selector: (row) => row.bulan, sortable: true },
    {
      name: 'Jenis Client',
      selector: (row) => row.jenis_client,
      wrap: true,
      width: '185px',
    },
    {
      name: 'Client',
      selector: (row) => row.client,
      wrap: true,
      width: '185px',
    },
    {
      name: 'Product Digital',
      selector: (row) => row.product_digital,
      wrap: true,
      width: '185px',
    },
    { name: 'Skema', selector: (row) => row.skema, wrap: true, width: '150px' },
    {
      name: 'Employee Status',
      selector: (row) => row.employment_status,
      wrap: true,
      width: '185px',
    },
    {
      name: 'NIK Metranet',
      selector: (row) => row.nik_metranet,
      wrap: true,
      width: '150px',
    },
    {
      name: 'NIK KTP',
      selector: (row) => row.nik_ktp,
      wrap: true,
      width: '150px',
    },
    { name: 'Nama', selector: (row) => row.nama, wrap: true, width: '200px' },
    {
      name: (
        <>
          <div style={styles.tableIncome}>
            <span style={styles.textIncome}>Penghasilan</span>
            <span>Gaji Pokok</span>
            <span>Tunjangan Posisi</span>
            <span>Tunjangan Kompetensi</span>
            <span>Overtime</span>
            <span>Rapel Gaji</span>
            <span>Kompensasi Akhir Kontrak</span>
            <span>THR</span>
            <span>Performance Bonus</span>
            <span>Lain Lain</span>
            <span>Keterangan Lain-lain</span>
            <span>Total Addition</span>
          </div>
          <div style={styles.tableSubtraction}>
            <span style={styles.textSubtraction}>Pengurangan</span>
            <span>Potongan Absen</span>
            <span>Pengiriman Fasilitas Kantor</span>
            <span>Kliring</span>
            <span>Lain-lain</span>
            <span>Keterangan Lain-lain</span>
            <span>Total Deduction</span>
          </div>
        </>
      ),
      selector: () => '',
      cell: (row) => (
        <>
          <div style={styles.cellIncome}>
            <span>{formatRupiah(row.gaji_pokok)}</span>
            <span>{formatRupiah(row.tunjangan_posisi)}</span>
            <span>{formatRupiah(row.tunjangan_kompetensi)}</span>
            <span>{formatRupiah(row.overtime)}</span>
            <span>{formatRupiah(row.rapel_gaji)}</span>
            <span>{formatRupiah(row.kompensasi_akhir_kontrak)}</span>
            <span>{formatRupiah(row.thr)}</span>
            <span>{formatRupiah(row.performance_bonus)}</span>
            <span>{formatRupiah(row.lain_lain)}</span>
            <span>{row.keterangan_lain_lain || '-'}</span>
            <span>{formatRupiah(row.total_addition)}</span>
          </div>
          <div style={styles.cellSubtraction}>
            <span>{formatRupiah(row.potongan_absen)}</span>
            <span>{formatRupiah(row.pengiriman_fasilitas_kantor)}</span>
            <span>{formatRupiah(row.other)}</span>
            <span>{formatRupiah(row.other_1)}</span>
            <span>{formatRupiah(row.other_2)}</span>
            <span>{formatRupiah(row.total_deduction)}</span>
          </div>
        </>
      ),
      width: '300rem',
    },
    {
      name: 'Salary Transfer',
      selector: (row) => formatRupiah(row.salary),
      wrap: true,
      width: '200px',
    },
  ];
};

export default columns;
