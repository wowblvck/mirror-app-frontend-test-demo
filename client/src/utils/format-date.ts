import { format, formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (postDate: Date): string => {
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 7) {
    return formatDistanceToNow(postDate, { addSuffix: true, locale: ru });
  }

  return format(postDate, "dd/MM/yyyy", { locale: ru });
};
