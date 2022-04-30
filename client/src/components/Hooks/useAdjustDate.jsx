import React from "react";

const useAdjustDate = rawDate => {
  const date = Date(rawDate).split(" ");
  const adjustedDate = `${date[1]} ${date[2]} ${date[3]}`;

  return adjustedDate;
};

export { useAdjustDate };
