export const yearOptions = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
];

export const monthOptions = [
  { value: '1', label: 'Januari' },
  { value: '2', label: 'Februari' },
  { value: '3', label: 'Maret' },
  { value: '4', label: 'April' },
  { value: '5', label: 'Mei' },
  { value: '6', label: 'Juni' },
  { value: '7', label: 'Juli' },
  { value: '8', label: 'Agustus' },
  { value: '9', label: 'September' },
  { value: '10', label: 'Oktober' },
  { value: '11', label: 'November' },
  { value: '12', label: 'Desember' },
];

export const monthLabelOptions = [
  { value: 'January', label: 'Januari' },
  { value: 'February', label: 'Februari' },
  { value: 'Maret', label: 'Maret' },
  { value: 'March', label: 'April' },
  { value: 'May', label: 'Mei' },
  { value: 'June', label: 'Juni' },
  { value: 'July', label: 'Juli' },
  { value: 'August', label: 'Agustus' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'Oktober' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'Desember' },
];

export const statusRemunOptions = [
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' },
];

export const statusJobPostOptions = [
  { value: 'Approved', label: 'Approved' },
  { value: 'Onprogress', label: 'On Progress' },
  { value: 'Pending', label: 'Pending' },
];

export const navbarDataOptions = [
  {
    title: 'Dashboard',
    href: '/',
    type: 'text',
  },
  {
    title: 'Help Center',
    href: '/help-center',
    type: 'text',
  },
  {
    title: '',
    href: '',
    type: 'divider',
  },
  {
    title: 'Setup',
    href: '',
    type: 'accordion',
    children: [
      {
        title: 'Admin',
        href: '/setup/admin-role',
      },
      {
        title: 'Account',
        href: '/setup/account',
      },
      {
        title: 'Document',
        href: '/setup/document',
      },
      {
        title: 'Job Post',
        href: '/setup/job-post',
      },
      {
        title: 'Remuneration',
        href: '/setup/remuneration',
      }
    ],
  },
  {
    title: 'Blast Notification',
    href: '/blast-notification',
    type: 'text',
  },
  {
    title: '',
    href: '',
    type: 'divider',
  },
  {
    title: 'Master Data',
    href: '',
    type: 'accordion',
    children: [
      {
        title: 'BPJSKES',
        href: '/master-data/bpjskes',
      },
      {
        title: 'BPJSTK',
        href: '/master-data/bpjstk',
      },
      {
        title: 'SALTAB',
        href: '/master-data/saltab',
      },
      {
        title: 'Pajak',
        href: '/master-data/pajak',
      },
      {
        title: 'Merge All TA',
        href: '/master-data/merge-all-ta',
      },
      {
        title: 'Merge Product',
        href: '/master-data/merge-product',
      },
    ],
  },
  {
    title: '',
    href: '',
    type: 'divider',
  },
  {
    title: 'Approval',
    href: '',
    type: 'accordion',
    children: [
      {
        title: 'Job Post',
        href: '/approval/job-post',
      },
      {
        title: 'Remuneration',
        href: '/approval/remuneration',
      },
    ],
  },
  {
    title: 'Send Document',
    href: '/send-document',
    type: 'text',
  },
  {
    title: 'Data Talent',
    href: '/data-talent',
    type: 'text',
  },
  {
    title: 'Payslip',
    href: '/payslip',
    type: 'text',
  },
  {
    title: '',
    href: '',
    type: 'divider',
  },
  {
    title: 'Talent Mitra',
    href: '/talent-mitra',
    type: 'text',
  },
  {
    title: 'List Mitra',
    href: '/list-mitra',
    type: 'text',
  },
  {
    title: 'Pre-Test Mitra',
    href: '/pre-test-mitra',
    type: 'text',
  },
  {
    title: 'Penilaian',
    href: '/penilaian-pre-test',
    type: 'text',
  },
];

export const formFieldsAdminOptions = [
  {
    label: 'Dashboard',
    slug: 'dashboard',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Create',
      },
    ],
  },
  {
    label: 'Help Center',
    slug: 'help_center',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Edit',
      },
      {
        label: 'Delete',
      },
      {
        label: 'Upload',
      },
      {
        label: 'Download',
      },
    ],
  },
  {
    label: 'Setup',
    slug: 'setup',
    children: [
      {
        label: 'Admin',
        slug: 'admin',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
      {
        label: 'Account',
        slug: 'account',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
          {
            label: 'Delete',
          },
        ],
      },
      {
        label: 'Job Post',
        slug: 'job_post',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
    ],
  },
  {
    label: 'Blast Notification',
    slug: 'blash_notif',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Create',
      },
    ],
  },
  {
    label: 'Master Data',
    slug: 'master_data',
    children: [
      {
        label: 'BPJSKES',
        slug: 'bpjskes',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
      {
        label: 'BPJSTK',
        slug: 'bpjstk',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
      {
        label: 'SALTAB',
        slug: 'saltab',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
      {
        label: 'Pajak',
        slug: 'pajak',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
      {
        label: 'Merge',
        slug: 'merge',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Create',
          },
        ],
      },
    ],
  },
  {
    label: 'High Level',
    slug: 'high_level',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Create',
      },
    ],
  },
  {
    label: 'Middle Level',
    slug: 'middle_level',
    children: [
      {
        label: 'Company',
        slug: 'company',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Upload',
          },
          {
            label: 'Download',
          },
        ],
      },
      {
        label: 'Talent',
        slug: 'talent',
        checkbox: [
          {
            label: 'View',
          },
          {
            label: 'Upload',
          },
          {
            label: 'Download',
          },
        ],
      },
      {
        label: 'Renewal',
        slug: 'renewal',
        checkbox: [
          {
            label: 'View',
          },
        ],
      },
    ],
  },
  {
    label: 'Approval Job Post',
    slug: 'approval_job_post',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Share',
      },
      {
        label: 'Approve',
      },
      {
        label: 'Reject',
      },
    ],
  },
  {
    label: 'Approval Remuneration',
    slug: 'approval_remun',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Save',
      },
      {
        label: 'Comment',
      },
    ],
  },
  {
    label: 'Send Document',
    slug: 'send_document',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Create',
      },
      {
        label: 'Edit',
      },
      {
        label: 'Delete',
      },
      {
        label: 'Send',
      },
      {
        label: 'Download',
      },
      {
        label: 'Message',
      },
    ],
  },
  {
    label: 'Data Talent',
    slug: 'talent',
    checkbox: [
      {
        label: 'View',
      },
      {
        label: 'Download',
      },
    ],
  },
  {
    label: 'Payslip',
    slug: 'payslip',
    checkbox: [
      {
        label: 'View',
      },
    ],
  },
  // {
  //   label: "Form",
  //   checkbox: [
  //     {
  //       label: "View"
  //     },
  //     {
  //       label: "Create"
  //     },
  //     {
  //       label: "Add"
  //     },
  //     {
  //       label: "Update"
  //     },
  //   ]
  // },
];

export const colors = [
  '#3B78C2',
  '#3AB471',
  '#F39F5A',
  '#F39F5A',
  '#9C27B0',
  '#607D8B',
];

export const jobPostOptions = [
  { label: 'Lokasi Kerja', value: 'work_location', prefix: 'job_location_name' },
  { label: 'Keuntungan dari Perusahaan', value: 'benefits_company', prefix: 'benefit_name' },
  { label: 'Pendidikan', value: 'education', prefix: 'education_name' },
  { label: 'Pengalaman', value: 'experience', prefix: 'experience_name' },
  { label: 'Spesialisasi Pekerjaan', value: 'job_specialization', prefix: 'job_specialist_name' },
  { label: 'Tingkat Pekerjaan', value: 'work_level', prefix: 'job_level_name' },
];