import moment from "moment";

const useAdjustDate = rawDate => {
  const adjustedDate = moment(rawDate)
    .utc()
    .format("DD/MM/YYYY");

  return adjustedDate;
};

export { useAdjustDate };
