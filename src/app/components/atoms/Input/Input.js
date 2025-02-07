import { Text } from '@chakra-ui/react';
const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Text color="gray.800" fontWeight="bold" fontSize="lg">
          {label}
        </Text>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...rest}
      />
    </div>
  );
};

export default Input;
