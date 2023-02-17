import { SearchIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { users } from "../../../data/users";
import Dates from "./Dates";
import { generateDays } from "../../../utils";
import { useEffect, useState } from "react";
import moment from "moment";
import React from "react";
import UserProject from "./UserProject";
import Bar from "./Bar";

const CalenderLayout = ({
  changeYear,
  changeMonth,
}: {
  changeYear: number;
  changeMonth: number;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const [projectName, setProjectName] = useState("");
  const [ProjectsIndex, setProjectsIndex] = useState<null | number>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hours, setHours] = useState<number>(8);

  const [row, setRow] = useState();
  const [projectData, setProjectData] = useState({});

  let currentMonthFirstDate = new Date(changeYear, changeMonth);

  function createBar() {
    const projectDetails = {
      name: projectName,
      hours: hours,
      start_date: startTime,
      end_date: endTime,
    };
    setProjectData(projectDetails);
    createNewProject(row);
  }
  function createNewProject(row: any) {
    console.log("data =>", projectData);
    row.employee.projects.push({
      name: projectName,
      hours: hours,
      start_date: startTime,
      end_date: endTime,
    });
    console.log("row ==>", row);
  }

  const [grids, setGrids] = useState(users);

  const days: Date[] = generateDays(changeMonth, changeYear);

  return (
    <HStack alignItems={"flex-start"} position={"relative"} top={"4.5rem"}>
      <Stack
        marginTop={-2}
        spacing={0}
        w={["10rem", "13rem", "18rem"]}
        position={"absolute"}
      >
        <InputGroup size="md" bg={"white"} border={"#D8DAE5"}>
          <Input
            px={"1.38rem"}
            py={"1.6rem"}
            borderRadius={0}
            type="text"
            placeholder="Search"
          />
          <InputRightElement alignSelf={"center"}>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        <Stack top={"3.324rem"} w={"full"} spacing={0} minH={"90vh"} h={"100%"}>
          {users.map((users: any, index: number) => (
            <UserProject users={users} index={index} />
          ))}
        </Stack>
      </Stack>
      <Stack
        marginTop={"-8px !important"}
        marginLeft={[
          "10rem !important",
          "13rem !important",
          "18rem !important",
        ]}
        overflowX={"scroll"}
        bgColor={"white"}
        w={"full"}
      >
        <Stack overflowY={"scroll"}>
          <Dates days={days} />
          {grids.map((row: any, gridIndex: number) => (
            <>
              <Flex key={gridIndex} mt={"0 !important"}>
                <>
                  {days.map((col: any, daysIndex: number) => (
                    <Box
                      key={daysIndex}
                      py={5}
                      px={7}
                      outline={"0.5px solid #D8DAE5"}
                      onClick={() => {
                        // console.log("clicked", row.employee.projects);
                        onOpen();
                        setRow(row);
                      }}
                    ></Box>
                  ))}
                </>
              </Flex>
              {row.employee.projects.map((proj: any, projIndex: number) => (
                <Flex mt={"0 !important"}>
                  <>
                    {days.map((col: any, daysIndex: number) => (
                      <Box
                        key={daysIndex}
                        justifyContent={"flex-end"}
                        position={"relative"}
                        py={5}
                        px={7}
                        mt={"0 !important"}
                        alignItems={"center"}
                        outline={"0.5px solid #D8DAE5"}
                      >
                        {moment(proj.start_date).isSame(col, "year") ? (
                          moment(proj.start_date).isSame(col, "month") ? (
                            moment(proj.start_date).isSame(col, "date") ? (
                              <Bar
                                barWidth="date-width"
                                projects={proj}
                                changeMonth={changeMonth}
                              />
                            ) : moment(proj.start_date).isSameOrBefore(
                                col,
                                "date"
                              ) ? (
                              <></>
                            ) : (
                              <></>
                            )
                          ) : moment(proj.start_date).isSameOrBefore(
                              col,
                              "month"
                            ) && moment(proj.end_date).isAfter(col, "month") ? (
                            moment(currentMonthFirstDate).format(
                              "YYYY-MM-DD"
                            ) === moment(col).format("YYYY-MM-DD") ? (
                              <>
                                <Bar
                                  barWidth="month-width"
                                  projects={proj}
                                  changeMonth={changeMonth}
                                />
                              </>
                            ) : (
                              <></>
                            )
                          ) : moment(proj.end_date).isSame(col, "month") &&
                            moment(currentMonthFirstDate).format(
                              "YYYY-MM-DD"
                            ) === moment(col).format("YYYY-MM-DD") ? (
                            <>
                              <Bar
                                barWidth="end-width"
                                projects={proj}
                                changeMonth={changeMonth}
                              />
                            </>
                          ) : (
                            <></>
                          )
                        ) : moment(proj.start_date).isSameOrBefore(
                            col,
                            "year"
                          ) ? (
                          moment(proj.start_date).isSameOrBefore(
                            col,
                            "month"
                          ) && moment(proj.end_date).isAfter(col, "month") ? (
                            moment(currentMonthFirstDate).format(
                              "YYYY-MM-DD"
                            ) === moment(col).format("YYYY-MM-DD") ? (
                              <>
                                <Bar
                                  barWidth="month-width"
                                  projects={proj}
                                  changeMonth={changeMonth}
                                />
                              </>
                            ) : (
                              <></>
                            )
                          ) : moment(proj.end_date).isSame(col, "month") &&
                            moment(currentMonthFirstDate).format(
                              "YYYY-MM-DD"
                            ) === moment(col).format("YYYY-MM-DD") ? (
                            <>
                              <Bar
                                barWidth="end-width"
                                projects={proj}
                                changeMonth={changeMonth}
                              />
                            </>
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                      </Box>
                    ))}
                  </>
                </Flex>
              ))}
            </>
          ))}
        </Stack>
      </Stack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent w={"19rem"} top={"10%"}>
            <AlertDialogBody>
              <Stack pt={"1rem"} spacing={"1rem"}>
                <FormLabel color={"text"}>Project</FormLabel>
                <Select
                  color={"grey"}
                  variant="outline"
                  bgColor={"white"}
                  placeholder="Select Projects"
                  onChange={(e) => setProjectName(e.target.value)}
                >
                  <option value="Micro saas">Micro saas</option>
                  <option value="Aurora">Aurora</option>
                  <option value="Konklab">Konklab</option>
                  <option value="Bamity">Bamity</option>
                  <option value="Tin">Tin</option>
                  <option value="Fixflex">Fixflex</option>
                  <option value="Cardify">Cardify</option>
                  <option value="Greenlam">Greenlam</option>
                </Select>
                <FormLabel color={"text"}>Start Date</FormLabel>
                <Input
                  color={"grey"}
                  bgColor={"white"}
                  type="date"
                  placeholder="Start Date"
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <FormLabel color={"text"}>End Date</FormLabel>
                <Input
                  color={"grey"}
                  bgColor={"white"}
                  type="date"
                  placeholder="End Date"
                  onChange={(e) => setEndTime(e.target.value)}
                />
                <FormLabel color={"text"}>Hours</FormLabel>
                <Select
                  color={"grey"}
                  variant="outline"
                  bgColor={"white"}
                  placeholder="Select Hours"
                  onChange={(e) => setHours(+e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Select>
              </Stack>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                w={"100%"}
                colorScheme={"green"}
                ref={cancelRef}
                onClick={() => {
                  createBar();
                  onClose();
                }}
              >
                Create
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </HStack>
  );
};

export default CalenderLayout;
