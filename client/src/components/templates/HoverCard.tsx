import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { FC } from "react";
import { Template } from "./types";
import { declension } from "@/utils/declension";
import { formatDate } from "@/utils/format-date";

export const HoverCard: FC<Template> = ({ post }) => {
  const { likes, comments, date, caption, user } = post;

  return (
    <Card className="w-full">
      <CardHeader>{caption}</CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col">
          <p className="text-sm">{user.username}</p>
          <p className="text-[12px] text-gray-500">
            {formatDate(new Date(date))}
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex items-center flex-wrap gap-2">
          <p className="text-xs">
            {likes}&nbsp;{declension(likes, ["лайк", "лайка", "лайков"])}
          </p>
          <p className="text-xs">
            {comments}&nbsp;
            {declension(comments, ["коммент", "коммента", "комментов"])}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
