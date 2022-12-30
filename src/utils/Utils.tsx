import { SummaryAnswer } from "../App";

export function addIdsToArray<T>(arr: T[]) {
  return arr.map((item, index) => ({ id: index + 1, ...item }));
}

export function computeNumberOfCorrectAnswers(arr: SummaryAnswer[]) {
  return arr.filter(
    (summaryAnswer) => summaryAnswer.answer == summaryAnswer.correctAnswer
  ).length;
};
