import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className="sticky top-0 bg-transparent backdrop-blur-lg rounded-2xl pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between  mb-5 text-white lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm" className="text-neutral-100 hover:text-neutral-950 ">
          <ArrowLeft className="h-5 w-5 stroke-2 " />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">
        {title}
      </h1>
      <div />
    </div>
  );
};
