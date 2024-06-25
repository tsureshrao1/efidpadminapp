import { format, parseISO, parse } from 'date-fns';

export  const formatDate = (dateString) => {
  if(!dateString) return;
  const date = parseISO(dateString);
  return format(date, 'dd MMM yyyy HH:mm');
};

export  const formatFormDate = (dateString) => {
  if(!dateString) return;
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
};

export  const getTimestamp = () => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
};