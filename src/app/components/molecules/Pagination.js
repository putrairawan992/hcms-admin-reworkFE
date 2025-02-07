import { Flex, Text, HStack, Button, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  return (
    <Flex justify="space-between" align="center" w="100%" mt={6}>
      <Text color="gray.600" fontSize="sm">
        Showing data {(currentPage - 1) * itemsPerPage + 1} to{' '}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{' '}
        entries
      </Text>
      <HStack spacing={2}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          variant="outline"
          size="sm"
          aria-label="Previous page"
          colorScheme="gray"
        />

        {[...Array(totalPages)].map((_, idx) => {
          const pageNumber = idx + 1;
          return (
            <Button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              variant={pageNumber === currentPage ? 'solid' : 'outline'}
              size="sm"
              bg={pageNumber === currentPage ? '#AE445A' : 'white'}
              color={pageNumber === currentPage ? 'white' : 'gray.600'}
              _hover={{
                bg: pageNumber === currentPage ? '#AE445A' : 'gray.100',
              }}
              borderColor={pageNumber === currentPage ? '#AE445A' : 'gray.200'}>
              {pageNumber}
            </Button>
          );
        })}

        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          variant="outline"
          size="sm"
          aria-label="Next page"
          colorScheme="gray"
        />
      </HStack>
    </Flex>
  );
};

export default Pagination;
