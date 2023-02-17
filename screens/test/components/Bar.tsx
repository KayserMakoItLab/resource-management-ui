import { Box, Button } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";

const Bar = ({
  barWidth,
  projects,
  changeMonth,
}: {
  barWidth: string;
  projects: {
    name: string;
    hours: number;
    start_date: string;
    end_date: string;
  };
  changeMonth: number;
}) => {
  const [width, setWidth] = useState(56);

  const getTempProjYear = new Date(projects.start_date).getFullYear();
  const getFullDaysInProjMonth = moment(
    new Date(getTempProjYear, changeMonth)
  ).daysInMonth();
  const getTempProjStartDate = new Date(projects.start_date).getDate() - 1;

  const fullStartMonthWidth =
    (getFullDaysInProjMonth - getTempProjStartDate) * 56;

  useEffect(() => {
    moment(projects.start_date).isSame(changeMonth, "month") &&
      moment(projects.start_date).isSame(changeMonth, "date");
    setWidth(fullStartMonthWidth);
    if (barWidth === "month-width") {
      setWidth(
        moment(new Date(getTempProjYear, changeMonth)).daysInMonth() * 56
      );
    }
    if (barWidth === "end-width") {
      setWidth(new Date(projects.end_date).getDate() * 56);
    }
  }, [changeMonth]);

  return (
    <Button
      as={Box}
      position={"absolute"}
      w={`${width}px`}
      h={6}
      top={2}
      left={0}
      zIndex={1}
      bgColor={"#6BDAAE"}
      borderRadius={3}
      fontSize={"sm"}
      fontWeight={300}
      _hover={{
        bgColor: "#52BD94",
      }}
    >
      {projects.hours + " Hours" || "8 Hours"}
    </Button>
  );
};

export default Bar;
