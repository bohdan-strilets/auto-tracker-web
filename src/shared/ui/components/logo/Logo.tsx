export type LogoProps = {
  variant?: 'full' | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const SIZE: Record<NonNullable<LogoProps['size']>, string> = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

export const Logo = ({ variant = 'icon', size = 'md' }: LogoProps) => {
  const onlyIconSrc = '/logo/logo_icon.png';
  const fullLogoSrc = '/logo/logo_text_icon.png';

  const src = variant === 'full' ? fullLogoSrc : onlyIconSrc;

  return <img src={src} alt="AutoTracker" className={SIZE[size]} />;
};
