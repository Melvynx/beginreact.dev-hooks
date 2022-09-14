import styles from './ShifumiCard.module.css';
import clsx from 'clsx';

const Icons = {
  paper: '✋',
  rock: '✊',
  scissors: '✌️',
};

export const ShifumiCard = ({ type, className, style }) => {
  return (
    <div className={clsx(styles.card, className)} style={style}>
      {Icons[type]}
    </div>
  );
};
