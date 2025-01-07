import {
  AlphabetIcon,
  BrainIcon,
  CodeIcon,
  HeartIcon,
  MegazineIcon,
  NumberIcon,
  PaintBrustIcon,
  PencilTipIcon,
  PhotoIcon,
  VideoIcon,
} from '@/app/components/icons';

export const typeOptions = (isActive) => [
  {
    id: '1',
    icon: (
      <BrainIcon
        width={25}
        height={25}
        color={isActive === '1' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '2',
    icon: (
      <VideoIcon
        width={25}
        height={25}
        color={isActive === '2' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '3',
    icon: (
      <AlphabetIcon
        width={25}
        height={25}
        color={isActive === '3' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '4',
    icon: (
      <PaintBrustIcon
        width={25}
        height={25}
        color={isActive === '4' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '5',
    icon: (
      <CodeIcon
        width={25}
        height={25}
        color={isActive === '5' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '6',
    icon: (
      <NumberIcon
        width={25}
        height={25}
        color={isActive === '6' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '7',
    icon: (
      <MegazineIcon
        width={25}
        height={25}
        color={isActive === '7' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '8',
    icon: (
      <PencilTipIcon
        width={25}
        height={25}
        color={isActive === '8' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '9',
    icon: (
      <PhotoIcon
        width={25}
        height={25}
        color={isActive === '9' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
  {
    id: '10',
    icon: (
      <HeartIcon
        width={25}
        height={25}
        color={isActive === '10' ? '#FFFFFF' : '#404041'}
      />
    ),
  },
];
