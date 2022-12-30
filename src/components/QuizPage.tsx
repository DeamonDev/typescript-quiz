import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { Answer, Question } from "../App";
import QuestionBox from "./QuestionBox";

type QuizPageProps = {
  questionNo: number;
  question: Question;
  selectAnswerHandler: (answer: Answer) => void;
};

const QuizPage = ({ questionNo, question, selectAnswerHandler }: QuizPageProps) => {
  let isFirstQuestion = questionNo == 1;
  let isLastQuestion = questionNo == 10;

  return (
    <Box
      top="50%"
      left="50%"
      position="fixed"
      bg="orange.100"
      w={["80%", "80%", "80%", "40%"]}
      transform="translate(-50%, -50%)"
      h={["60%", "60%", "60%", "40%"]}
      borderRadius={15}
    >
      <Flex
        h="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="3xl" mt="0.5rem">
          Question: {questionNo + 1} / 10
        </Text>
        <QuestionBox question={question} selectAnswerHandler={selectAnswerHandler} />
        <div></div>
      </Flex>
    </Box>
  );
};

export default QuizPage;
