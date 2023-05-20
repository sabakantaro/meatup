import React from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

type Props = {};

function ShareButton({}: Props) {
  const copyUrlToClipboard = (e: any) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    alert("Copied to clipboard");
  };

  return (
    <div>
      <div onClick={(e) => copyUrlToClipboard(e)}>
        <ArrowUpOnSquareIcon className='w-6 h-6' />
      </div>
    </div>
  );
}

export default ShareButton;
