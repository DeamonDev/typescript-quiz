import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { SummaryAnswer } from "../App";
import { computeNumberOfCorrectAnswers } from "../utils/Utils";
import SummaryItem from "./SummaryItem";

export type SummaryProps = {
  summaryAnswers: SummaryAnswer[];
  resetQuizHandler: () => void;
};

const Summary = ({ summaryAnswers, resetQuizHandler }: SummaryProps) => {
  const numberOfCorrectAnswers = computeNumberOfCorrectAnswers(summaryAnswers);

  return (
    <Box
      top="50%"
      left="50%"
      position="fixed"
      bg="orange.100"
      w={["80%", "80%", "80%", "40%"]}
      transform="translate(-50%, -50%)"
      h={["60%", "60%", "60%", "90%"]}
      borderRadius={15}
      style={{overflowY: "scroll"}}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="3xl" mt="0.5rem">
          Your score: {numberOfCorrectAnswers} / 10
        </Text>
        {summaryAnswers.map((summaryAnswer) => (
          <SummaryItem
            id={summaryAnswer.id}
            question={summaryAnswer.question}
            answer={summaryAnswer.answer}
            correctAnswer={summaryAnswer.correctAnswer}
          />
        ))}
        <Button bg="purple.200" mb="0.5rem" h="50px" onClick={resetQuizHandler}>Play Again!</Button>
      </Flex>
    </Box>
  );
};

export default Summary;
