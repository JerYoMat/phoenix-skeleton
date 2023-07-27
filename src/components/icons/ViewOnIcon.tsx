import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as ViewOn } from '../icons/ViewOn.svg';

function ViewOnIcon(props: SvgIconProps) {
  return <SvgIcon {...props} component={ViewOn} />;
}

export default ViewOnIcon;
