import React, { memo, useState } from 'react';
import { Gap } from '../../atoms';
import { Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { typeOptions } from './shared/general';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ChooseLogo = ({ onClick }) => {
  const [isActive, setIsActive] = useState('');

  const handleLogoClick = (item) => {
    setIsActive(item.id);
    onClick(item); // Call the onClick with the item to get its label
  };

  return (
    <Flex>
      {typeOptions(isActive).map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Flex
              alignItems="center"
              justifyContent="center"
              borderRadius={8}
              onClick={() => handleLogoClick(item)} // Use the new handleLogoClick function
              cursor="pointer"
              padding={2}
              borderWidth={1}
              borderColor="#AE445A"
              backgroundColor={isActive === item.id ? '#AE445A' : ''}>
              {item.icon}
            </Flex>
            <Gap width={2} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default memo(ChooseLogo);
