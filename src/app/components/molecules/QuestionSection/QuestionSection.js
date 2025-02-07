import { memo } from 'react';
import { Gap } from '../../atoms';
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Radio,
  Input,
} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuestionSection = ({
  questionNumber,
  isMultipleChoice = false,
  onDelete,
  value,
  onChange,
}) => {
  const handleTextChange = (text) => {
    onChange({ question: text });
  };

  const handleOptionChange = (optionIndex, optionText) => {
    const updatedOptions = value.options.map((option, index) =>
      index === optionIndex ? { ...option, text: optionText } : option
    );
    onChange({ options: updatedOptions });
  };

  const handleCorrectAnswerChange = (correctAnswer) => {
    const updatedOptions = value.options.map((option) => ({
      ...option,
      is_correction: (
        option.alphabet.toUpperCase() === correctAnswer
      ).toString(),
    }));
    onChange({ options: updatedOptions });
  };

  return (
    <Box>
      <Flex>
        <Text color="#AE445A" fontWeight="bold" fontSize={16}>
          Pertanyaan {questionNumber}
        </Text>
        <Button
          size="sm"
          colorScheme="red"
          variant="outline"
          ml="auto"
          onClick={onDelete}>
          Hapus
        </Button>
      </Flex>
      <Gap height={2} />
      <ReactQuill
        theme="snow"
        value={value.question}
        onChange={handleTextChange}
        style={{ margin: '0px 0px 2rem 0px', height: '150px' }}
      />
      <Gap height={8} />

      {isMultipleChoice && (
        <Flex gap={2}>
          {value.options?.map((option, index) => (
            <Flex
              key={option.alphabet}
              borderWidth="1px"
              p={2}
              borderColor={'#AE445A'}
              borderRadius="lg"
              alignItems="center"
              gap={2}
              cursor="pointer"
              width={'100%'}
              height={'40px'}
              _hover={{ borderColor: '#4285F4' }}>
              <Radio
                value={option.alphabet.toUpperCase()}
                isChecked={option.is_correction === 'true'}
                onChange={() =>
                  handleCorrectAnswerChange(option.alphabet.toUpperCase())
                }
                colorScheme="blue"
              />
              <Text color="#404041">{option.alphabet.toUpperCase()}. </Text>
              <Input
                placeholder={`Pilihan Ganda ${option.alphabet.toUpperCase()}`}
                value={option.text}
                border="none"
                _focus={{ border: 'none', boxShadow: 'none' }}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                style={{ flex: 1 }}
              />
            </Flex>
          ))}
        </Flex>
      )}

      <Gap height={8} />
      <Divider borderWidth={1} borderColor="#B6B6B6" />
      <Gap height={8} />
    </Box>
  );
};

export default memo(QuestionSection);
