import React, { useEffect } from 'react';
import { Item } from './interface/Item';

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: () => void;
  list: Item[];
}
const Alert: React.FC<AlertProps> = (props) => {
  const { type, msg, removeAlert, list } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
};

export default Alert;
