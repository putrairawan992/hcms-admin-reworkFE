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

const iconComponents = {
  1: BrainIcon,
  2: VideoIcon,
  3: AlphabetIcon,
  4: PaintBrustIcon,
  5: CodeIcon,
  6: NumberIcon,
  7: MegazineIcon,
  8: PencilTipIcon,
  9: PhotoIcon,
  10: HeartIcon,
};

export const typeOptions = (isActive, alwaysActive = false, size = 'sm') => {
  return Object.keys(iconComponents).map((id) => {
    const IconComponent = iconComponents[id];
    return {
      id,
      label: IconComponent.displayName || id, // Using displayName as label fallback
      icon: (
        <IconComponent
          width={size === 'lg' ? 45 : 25}
          height={size === 'lg' ? 45 : 25}
          color={isActive === id || alwaysActive ? '#FFFFFF' : '#404041'}
        />
      ),
    };
  });
};
