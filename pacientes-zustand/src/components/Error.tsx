import type React from "react";

export default function Error({children}: {children:React.ReactNode}) {
  return (
    <p className="text-red-500 font-bold p-3 text-sm">
        {children}
    </p>
  )
};

