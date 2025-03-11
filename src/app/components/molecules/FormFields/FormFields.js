import { memo, useCallback } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { noop } from '@/app/utils/helpers';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const FormFields = ({
  label = '',
  type = '',
  value = '',
  slug = '',
  theme = 'default',
  placeholder = '',
  disabled = false,
  onChangeText = noop,
}) => {
  const RenderForm = useCallback(() => {
    if (type === 'text') {
      return (
        <Input
          key={slug}
          id={slug}
          flex={1}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={10}
          padding="8px 16px"
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText(slug, e.target.value)}
          disabled={disabled}
        />
      );
    } else if (type === 'textarea') {
      return (
        <ReactQuill
          theme="snow"
          key={slug}
          id={slug}
          style={{ height: '150px', flex: 1, marginBottom: 60 }}
          value={value}
          onChange={(value) => onChangeText(slug, value)}
          disabled={disabled}
        />
      );
    } else if (type === 'date') {
      return (
        <Input
          key={slug}
          id={slug}
          flex={1}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={10}
          padding="8px 16px"
          type='date'
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => onChangeText(slug, e.target.value)}
        />
      );
    }
  }, []);

  {
    return theme === 'default' ? (
      <Flex
        key={slug}
        flex={1}
        alignItems={type === 'textarea' ? 'flex-start' : 'center'}
        marginBottom={2}>
        <Box flex={0.5}>
          <Text fontSize={12} fontWeight="bold" color="#404041">
            {label}
          </Text>
        </Box>
        <Flex flex={1}>
          <RenderForm />
        </Flex>
      </Flex>
    ) : (
      <Box flex={1}>
        <Box flex={0.5}>
          <Text fontSize={14} fontWeight="bold" color="#404041">
            {label}
          </Text>
        </Box>
        <Flex flex={1}>
          <Input
            key={slug}
            id={slug}
            flex={1}
            borderWidth={1}
            borderColor="#AE445A"
            borderRadius={10}
            padding="8px 16px"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeText(slug, e.target.value)}
          />
        </Flex>
      </Box>
    );
  }
};

export default memo(FormFields);
