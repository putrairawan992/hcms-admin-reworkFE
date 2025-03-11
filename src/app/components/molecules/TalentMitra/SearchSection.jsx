'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Box, Flex, Button, Input } from '@chakra-ui/react';
import SelectField from '../../atoms/SelectField';

const SearchSection = ({
  masterData = {},
  onChangeSelect,
  onSearch,
  filters = {},
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Set search query from filters when component mounts or filters change
  useEffect(() => {
    if (filters.key_search) {
      setSearchQuery(filters.key_search);
    }
  }, [filters.key_search]);

  // Transform master data for dropdown usage using useMemo
  const educationOptions = useMemo(
    () =>
      masterData.education?.map((item) => ({
        value: item.id.toString(),
        label: item.education_name,
      })) || [],
    [masterData.education]
  );

  const experienceOptions = useMemo(
    () =>
      masterData.experience?.map((item) => ({
        value: item.id,
        label: item.experience_name,
      })) || [],
    [masterData.experience]
  );

  const competenceOptions = useMemo(
    () =>
      masterData.competence?.map((item) => ({
        value: item.id,
        label: item.experience_name,
      })) || [],
    [masterData.competence]
  );

  const specializationOptions = useMemo(
    () =>
      masterData.job_specialist?.map((item) => ({
        value: item.id.toString(),
        label: item.job_specialist_name,
      })) || [],
    [masterData.job_specialist]
  );

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');

    // Reset all filters in parent component
    onChangeSelect('education_id', '');
    onChangeSelect('experience_id', '');
    onChangeSelect('competence_test_id', '');
    onChangeSelect('job_specialist_id', '');
    onSearch('');
  };

  console.log({ filters });
  return (
    <Box width="100%" bg="white" p={4} boxShadow="lg" borderRadius="lg">
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <SelectField
          label="Pendidikan"
          slug="education_id"
          value={filters.education_id || ''}
          options={educationOptions}
          onChange={onChangeSelect}
          placeholder="Pilih Pendidikan"
        />
        <SelectField
          label="Pengalaman"
          slug="experience_id"
          value={filters.experience_id || ''}
          options={experienceOptions}
          onChange={onChangeSelect}
          placeholder="Pilih Pengalaman"
        />
        <SelectField
          label="Tes Kompetensi"
          slug="competence_test_id"
          value={filters.competence_test_id || ''}
          options={competenceOptions}
          onChange={onChangeSelect}
          placeholder="Pilih Tes Kompetensi"
        />
        <SelectField
          label="Spesialisasi"
          slug="job_specialist_id"
          value={filters.job_specialist_id || ''}
          options={specializationOptions}
          onChange={onChangeSelect}
          placeholder="Pilih Spesialisasi"
        />
        <Box flex={1}>
          <Box
            as="label"
            display="block"
            fontWeight="bold"
            color="#AE445A"
            mb={2}>
            Cari Kandidat
          </Box>
          <Flex>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Cari Kandidat"
              borderColor="#AE445A"
              borderRadius="lg"
              borderRightRadius="0"
              _focus={{ borderColor: '#953A4D' }}
            />
            <Button
              onClick={handleSearch}
              bg="#AE445A"
              color="white"
              borderRadius="lg"
              borderLeftRadius="0"
              _hover={{ bg: '#953A4D' }}
              px={3}>
              <Search2Icon />
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* Reset Filters Button */}
      <Flex justify="flex-end" mt={4}>
        <Button
          onClick={resetFilters}
          color="#AE445A"
          borderColor="#AE445A"
          variant="outline"
          size="sm"
          _hover={{ bg: '#AE445A', color: 'white' }}>
          Reset Filter
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchSection;
