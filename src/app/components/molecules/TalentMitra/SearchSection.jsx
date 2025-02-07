'use client';

import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import CustomDropdown from '../../atoms/CustomDropdown';

const competencyOptions = [
  { value: 'TOEIC', label: 'TOEIC' },
  { value: 'TOEFL', label: 'TOEFL' },
  { value: 'IELTS', label: 'IELTS' },
  { value: 'GMAT', label: 'GMAT' },
];
const educationOptions = [
  { value: 'sma', label: 'SMA/SMK' },
  { value: 'd3', label: 'D3' },
  { value: 's1', label: 'S1' },
  { value: 's2', label: 'S2' },
];
const experienceOptions = [
  { value: 'fresh', label: 'Fresh Graduate' },
  { value: '1-3', label: '1-3 Tahun' },
  { value: '3-5', label: '3-5 Tahun' },
  { value: '5+', label: '5+ Tahun' },
];

const SearchSection = () => {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedCompetency, setSelectedCompetency] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const searchCandidates = () => {
    console.log({
      education: selectedEducation,
      experience: selectedExperience,
      competencyTest: selectedCompetency,
      specialization: selectedSpecialization,
      searchQuery,
    });
  };

  return (
    <div className="container mt-5 p-4  shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="form-group">
          <label className="text-[#AE445A] font-bold">Pendidikan</label>
          <CustomDropdown
            value={selectedEducation}
            setValue={setSelectedEducation}
            options={educationOptions}
          />
        </div>
        <div className="form-group">
          <label className="text-[#AE445A] font-bold">Pengalaman</label>
          <CustomDropdown
            value={selectedExperience}
            setValue={setSelectedExperience}
            options={experienceOptions}
          />
        </div>
        <div className="form-group">
          <label className="text-[#AE445A] font-bold">Tes Kompetensi</label>
          <CustomDropdown
            value={selectedCompetency}
            setValue={setSelectedCompetency}
            options={competencyOptions}
          />
        </div>
        <div className="form-group">
          <label className="text-[#AE445A] font-bold">Spesialisasi</label>
          <CustomDropdown
            value={selectedSpecialization}
            setValue={setSelectedSpecialization}
            options={competencyOptions}
          />
        </div>
        <div className="form-group">
          <label className="text-[#AE445A] font-bold">Cari Kandidat</label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Kandidat"
              className="w-full p-2 border border-[#AE445A] rounded-lg text-sm outline-none"
            />
            <button
              onClick={searchCandidates}
              className="absolute right-0 top-0 bottom-0 px-3 bg-[#AE445A] text-white rounded-r-lg">
              <Search2Icon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
