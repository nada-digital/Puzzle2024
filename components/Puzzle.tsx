import { FC } from "react";

type Props = {
  className?: string;
  url:string;
  difficulty: number;
}

export const Puzzle: FC<Props> = ({ className,url,difficulty }) => {
  return (
    <div className="w-full h-[calc(70vh)]">
      <p className="my-4">難易度{new Array(difficulty).fill("★").join("")}</p>
      <iframe src={url} width={"100%"} height={"70%"} className="border-none"></iframe>
    </div>
  )
}