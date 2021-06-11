import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '../../../styles/components/UI/Button/ButtonArrowStyled';

interface Props {
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  arrow?: string;
}

const ButtonArrow: React.FC<Props> = props => {
  return (
    <Button {...props}>
      {props.arrow === 'left' && <ArrowBackIcon />}
      &nbsp;{props.children}&nbsp;
      {props.arrow === 'right' && <ArrowForwardIcon />}
    </Button>
  );
};

export default ButtonArrow;
