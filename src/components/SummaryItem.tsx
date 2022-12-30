import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { SummaryAnswer } from "../App";

const SummaryItem = ({
  id,
  question,
  answer,
  correctAnswer,
}: SummaryAnswer) => {
  const isCorrectAnswer: boolean = answer === correctAnswer;

  return (
    <Box
      bg={isCorrectAnswer ? "green.200" : "red.100"}
      w="90%"
      borderRadius="10px"
      mb="1rem"
    >
      <Flex flexDirection="column">
        <Center>
          <Text fontSize="2xl" ml="0.5rem" mr="0.5rem">
            {question}
          </Text>
        </Center>
        <Box bg={isCorrectAnswer ? "green.300" : "red.200"} w="100%" roundedBottom="10px">
          <Center>
            <Text fontSize="1xl">
              [CORRECT ANSWER: {correctAnswer.toString().toUpperCase()}]
            </Text>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default SummaryItem;
