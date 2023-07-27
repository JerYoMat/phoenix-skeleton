import { SvgIcon, SvgIconProps } from '@mui/material';

import {ReactComponent as ViewOff} from '../icons/View Off.svg';

function ViewOffIcon(props: SvgIconProps) {
  return <SvgIcon {...props} component={ViewOff} />;
}

export default ViewOffIcon;
