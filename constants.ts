import type { Question } from './types';
import { QUESTIONS_PART_1 } from './questions/part1';
import { QUESTIONS_PART_2 } from './questions/part2';
import { QUESTIONS_PART_3 } from './questions/part3';
import { QUESTIONS_PART_4 } from './questions/part4';

export const ALL_QUESTIONS: Question[] = [
    ...QUESTIONS_PART_1,
    ...QUESTIONS_PART_2,
    ...QUESTIONS_PART_3,
    ...QUESTIONS_PART_4,
];

export const DIFFICULTIES = ["Easy", "Medium", "Hard", "Mix"];

const allMathFields = [...new Set(ALL_QUESTIONS.map(q => q.field_of_math))];
export const MATH_FIELDS = ["Mix", ...allMathFields.sort()];
