import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from './ButtonArrowStyled';

interface Props {
  onClick?: () => void;
  isSubmit?: boolean;
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  arrow?: string;
  disabled?: boolean;
}

const ButtonArrow: React.FC<Props> = props => {
  return (
    <Button type={props.isSubmit ? 'submit' : 'button'} {...props}>
      {props.arrow === 'left' && <ArrowBackIcon />}
      &nbsp;{props.children}&nbsp;
      {props.arrow === 'right' && <ArrowForwardIcon />}
    </Button>
  );
};

export default ButtonArrow;
