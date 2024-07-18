import { ComponentProps } from "react";
import Header from "./header";

export interface PageProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function Page({ children, ...props }: PageProps) {
  return (
    <div {...props} className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`h-full flex-1 md:w-[1080px] xl:w-[1200px] sm:w-[740px] mx-auto py-10 ${props.className}`}
      >
        {children}
      </main>
    </div>
  );
}
