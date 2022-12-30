import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { Answer, Question } from "../App";

export type QuestionBoxProps = {
  question: Question;
  selectAnswerHandler: (answer: Answer) => void;
};

const QuestionBox = ({ question, selectAnswerHandler }: QuestionBoxProps) => {
  return (
    <Box w="80%">
      <Flex flexDirection="column">
        <Center>
          <Text fontSize="2xl" mb="1rem">
            {question.question}
          </Text>
        </Center>
        <Flex flexDirection="row" justifyContent="space-between">
          <Button
            w="30%"
            bg="green.200"
            onClick={selectAnswerHandler.bind(null, {
              id: question.id,
              answer: true,
            } as Answer)}
          >
            Yes
          </Button>
          <Button
            w="30%"
            bg="red.200"
            onClick={selectAnswerHandler.bind(null, {
              id: question.id,
              answer: false,
            } as Answer)}
          >
            No
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuestionBox;
