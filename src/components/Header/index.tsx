import classes from './styles';

export const Header: React.FC = ({ children }) => {
  return <header className={classes.header()}>{children}</header>;
};
