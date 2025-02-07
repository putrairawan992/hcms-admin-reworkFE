export const contractTemplateOptions = [
  {
    type: 'Offering Letter Normal',
    data: [
      {
        title: 'Judul Offering Letter Skema Normal',
        formField: [
          {
            label: 'No. Surat:',
            type: 'text',
            isDisabled: false,
            field: 'letter_no'
          }
        ],
      },
      {
        title: 'Isi Offering Letter Skema Normal',
        formField: [
          {
            label: 'Ruang Lingkup:',
            type: 'textarea',
            isDisabled: false,
            field: 'scope'
          },
          {
            label: 'Nama Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_person'
          },
          {
            label: 'Role Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_role'
          },
          {
            label: 'Level Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_level'
          },
        ],
      },
    ],
  },
  {
    type: 'Offering Letter Khusus',
    data: [
      {
        title: 'Judul Offering Letter Skema Khusus',
        formField: [
          {
            label: 'No. Surat:',
            type: 'text',
            isDisabled: false,
            field: 'letter_no'
          }
        ],
      },
      {
        title: 'Isi Offering Letter Skema Khusus',
        formField: [
          {
            label: 'Ruang Lingkup:',
            type: 'textarea',
            isDisabled: false,
            field: 'scope'
          },
          {
            label: 'Nama Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_person'
          },
          {
            label: 'Role Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_role'
          },
          {
            label: 'Level Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_level'
          },
        ],
      },
    ],
  },
  {
    type: 'PKWT',
    data: [
      {
        title: 'Judul PKWT Skema Khusus/Normal',
        formField: [
          {
            label: 'Nomor Surat PKWT:',
            type: 'text',
            isDisabled: false,
            field: 'letter_no'
          }
        ],
      },
      {
        title: 'Isi PKWT Skema Khusus/Normal',
        formField: [
          {
            label: 'Nama Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_person'
          },
          {
            label: 'Nomor Surat Kuasa PJ:',
            type: 'text',
            isDisabled: true,
            field: 'power_of_attorney_number'
          },
          {
            label: 'Tanggal Surat Kuasa PJ:',
            type: 'text',
            isDisabled: true,
            field: 'power_of_attorney_date'
          },
          {
            label: 'Usia',
            type: 'text',
            isDisabled: false,
            field: 'age'
          },
          {
            label: 'Tempat Lahir:',
            type: 'text',
            isDisabled: false,
            field: 'age'
          },
          {
            label: 'Tanggal Lahir:',
            type: 'date',
            isDisabled: false,
            field: 'birth_of_date'
          },
          {
            label: 'Poin-poin Pertimbangan:',
            type: 'textarea',
            isDisabled: true,
            field: 'consideration'
          },

          {
            label: 'THP (Terbilang):',
            type: 'text',
            isDisabled: false,
            field: 'thp'
          },

          {
            label: 'Gaji Pokok (Terbilang):',
            type: 'text',
            isDisabled: false,
            field: 'gaji_pokok'
          },

          {
            label: 'Tunj. Posisi (Terbilang):',
            type: 'text',
            isDisabled: false,
            field: 'tunjangan_posisi'
          },

          {
            label: 'Durasi Kontrak Bulan (Terbilang):',
            type: 'text',
            isDisabled: false,
            field: 'durasi_kontrak'
          },
          {
            label: 'Pasal 8 Berakhinya Perjanjian atau Pemutusan Perjanjian:',
            type: 'text',
            isDisabled: false,
            field: 'pasal_8'
          },
        ],
      },
      {
        title: 'Lampiran I',
        formField: [
          {
            label: 'Ruang Lingkup:',
            type: 'textarea',
            isDisabled: false,
            field: 'scope'
          }
        ],
      },
    ],
  },
  {
    type: 'Kontrak Freelance',
    data: [
      {
        title: 'Judul Kontrak Freelance',
        formField: [
          {
            label: 'No. Surat:',
            type: 'text',
            isDisabled: false,
            field: 'letter_no'
          }
        ],
      },
      {
        title: 'Isi Kontrak Freelance',
        formField: [
          {
            label: 'Ruang Lingkup:',
            type: 'date',
            isDisabled: false,
            field: 'scope'
          },
          {
            label: 'Nama Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_person'
          },
          {
            label: 'Role Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_role'
          },
          {
            label: 'Level Penanggung Jawab:',
            type: 'text',
            isDisabled: true,
            field: 'responsible_level'
          },
        ],
      }
    ],
  },
];