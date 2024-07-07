import { format, parseISO, parse } from 'date-fns';

export  const formatDate = (dateString) => {
  if(!dateString) return;
  const date = parseISO(dateString);
  return format(date, 'dd MMM yyyy');
};

export  const formatFormDate = (dateString) => {
  if(!dateString) return;
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
};

export  const getTimestamp = () => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
};

export const dateFullFormat = (date) => {
  if (date) return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  return "";
};

export const displayDate = (date) => {
  if (date) return format(date, "dd-MM-yyyy");
  return "";
};
export const displayDateTime = (date) => {
  if (date) return format(date, "dd-MM-yyyy hh:mm a");
  return "";
};