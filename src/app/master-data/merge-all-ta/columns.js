import { formatRupiah } from "@/app/utils/helpers";
import styles from "./styles";

const columns = (page) => {
  return [
    { name: 'No', selector: (row, index) => 10 * (page - 1) + index + 1, sortable: true, width: '65px', wrap: true },
    { name: 'Tahun', selector: (row) => row.tahun, sortable: true },
    { name: 'Bulan', selector: (row) => row.bulan, sortable: true },
    { name: 'Jenis Client', selector: (row) => row.jenis_client, wrap: true, width: '185px' },
    { name: 'Client', selector: (row) => row.client, wrap: true, width: '185px' },
    { name: 'Product Digital', selector: (row) => row.product_digital, wrap: true, width: '185px' },
    { name: 'Skema', selector: (row) => row.skema, wrap: true, width: '150px' },
    { name: 'Employee Status', selector: (row) => row.employment_status, wrap: true, width: '185px' },
    { name: 'NIK Metranet', selector: (row) => row.nik_metranet, wrap: true, width: '150px' },
    { name: 'NIK KTP', selector: (row) => row.nik_ktp, wrap: true, width: '150px' },
    { name: 'Nama', selector: (row) => row.nama, wrap: true, width: '200px' },
    {
      name: (
        <>
          <div style={styles.tableAllowance}>
            <span style={styles.textTableAllowance}>Allowance</span>
            <span>Role</span>
            <span>Gaji Pokok</span>
            <span>Tunjangan Posisi</span>
            <span>Tunjangan Kompetensi</span>
            <span>Overtime</span>
            <span>Rapel Gaji</span>
            <span>Kompensasi Akhir Kontrak</span>
            <span>THR</span>
            <span>Bonus</span>
            <span>Lain Lain</span>
            <span>Keterangan Lain-lain</span>
            <span>Total Allowance</span>
          </div>
          <div style={styles.tableDeduction}>
            <span style={styles.textTableDeduction}>Deduction</span>
            <span>Potongan Absen</span>
            <span>Pengiriman Fasilitas Kantor</span>
            <span>Kliring</span>
            <span>Lain-lain</span>
            <span>Keterangan Lain-lain</span>
            <span>BPJSTK Iuran JHT (2,00%)</span>
            <span>BPJSTK Iuran JP (1,00%)</span>
            <span>Total Iuran BPJSTK</span>
            <span>Premi BPJSKES</span>
            <span>Total Deduction</span>
          </div>
          <div style={styles.tableCompany}>
            <span style={styles.textTableCompany}>Tanggungan Perusahaan</span>
            <span>BPJSTK Iuran JKK (0,24%)</span>
            <span>BPJSTK Iuran JKM (0,30%)</span>
            <span>BPJSTK Iuran JHT (3,70%)</span>
            <span>BPJSTK Iuran JP (2,00%)</span>
            <span>Total Iuran BPSTK</span>
            <span>Premi BPJSKES</span>
            <span>Pajak</span>
            <span>Tanggungan Perusahaan</span>
          </div>
        </>
      ),
      selector: () => '',
      cell: (row) => (
        <>
          <div style={styles.cellAllowance}>
            <span>{row.role || '-'}</span>
            <span>{formatRupiah(row.gaji_pokok || 0)}</span>
            <span>{formatRupiah(row.tunjangan_posisi || 0)}</span>
            <span>{formatRupiah(row.overtime || 0)}</span>
            <span>{formatRupiah(row.rapel || 0)}</span>
            <span>{formatRupiah(row.kompensasi_akhir_kontrak || 0)}</span>
            <span>{formatRupiah(row.thr || 0)}</span>
            <span>{formatRupiah(row.bonus || 0)}</span>
            <span>{formatRupiah(row.lain_lain || 0)}</span>
            <span>{formatRupiah(row.keterangan_lain_lain || 0)}</span>
            <span>{formatRupiah(row.total_1 || 0)}</span>
          </div>
          <div style={styles.cellDeduction}>
            <span>{formatRupiah(row.potongan_absen || 0)}</span>
            <span>{formatRupiah(row.pengiriman_fasilitas_kantor || 0)}</span>
            <span>{formatRupiah(row.kliring || 0)}</span>
            <span>{formatRupiah(row.lain_lain || 0)}</span>
            <span>{formatRupiah(row.keterangan_lain_lain || 0)}</span>
            <span>{formatRupiah(row.bpjstk_iuran_jht_2_00 || 0)}</span>
            <span>{formatRupiah(row.bpjstk_iuran_jp_1_00 || 0)}</span>
            <span>{formatRupiah(row.total_iuran_bpstk_karyawan || 0)}</span>
            <span>{formatRupiah(row.premi_bpjskes || 0)}</span>
            <span>{formatRupiah(row.total_2 || 0)}</span>
          </div>
          <div style={styles.cellCompany}>
            <span>{formatRupiah(row.bpjstk_iuran_jkk_0_24 || 0)}</span>
            <span>{formatRupiah(row.bpjstk_iuran_jkm_0_30 || 0)}</span>
            <span>{formatRupiah(row.bpjstk_iuran_jht_3_70 || 0)}</span>
            <span>{formatRupiah(row.bpjstk_iuran_jp_2_00 || 0)}</span>
            <span>{formatRupiah(row.total_iuran_bpstk_perusahaan || 0)}</span>
            <span>{formatRupiah(row.premi_bpjskes_2 || 0)}</span>
            <span>{formatRupiah(row.pajak || 0)}</span>
            <span>{formatRupiah(row.total_3 || 0)}</span>
          </div>
        </>
      ),
      width: '500vw',
    },
    { name: 'Net Salary', selector: (row) => formatRupiah(row.total_4) || '-', wrap: true, width: '200px' },
    { name: 'TANI', selector: (row) => formatRupiah(row.total_5) || '-', wrap: true, width: '200px' },
  ]
};

export default columns