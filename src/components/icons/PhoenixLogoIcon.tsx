import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { ReactComponent as PhoenixLogo } from '../../assets/icons/logo.svg';

function PhoenixLogoIcon(props: SvgIconProps) {
  return <SvgIcon {...props} color="primary" viewBox="0 0 14 14" component={PhoenixLogo} />;
}

export default PhoenixLogoIcon;
