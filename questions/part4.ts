import type { Question } from '../types';

export const QUESTIONS_PART_4: Question[] = [
    {
      "id": 81,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Simple Interest",
      "question_text": "If $2,000 is invested for 3 years at a simple annual interest rate of 5%, what is the total interest earned?",
      "options": [
        {"option": "A", "text": "$150"},
        {"option": "B", "text": "$300"},
        {"option": "C", "text": "$500"},
        {"option": "D", "text": "$2,300"},
        {"option": "E", "text": "$2,315.25"}
      ],
      "correct_answer": "B",
      "explanation": "The formula for simple interest is I = P &times; r &times; t. Here, P = 2000, r = 0.05, and t = 3. The interest earned is I = 2000 &times; 0.05 &times; 3 = 100 &times; 3 = $300."
    },
    {
      "id": 82,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Functions",
      "question_text": "If <i>f(x)</i> = <i>ax</i> + <i>b</i>, what is the value of <i>f(2)</i>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>f(0)</i> = 3",
        "2": "<i>f(1)</i> = 5"
      },
      "correct_answer": "C",
      "explanation": "We need to find <i>f(2)</i> = 2<i>a</i> + <i>b</i>. This requires us to know the values of <i>a</i> and <i>b</i>. Statement (1): <i>f(0)</i> = <i>a</i>(0) + <i>b</i> = 3. This tells us <i>b</i> = 3. But we don't know <i>a</i>. Insufficient. Statement (2): <i>f(1)</i> = <i>a</i>(1) + <i>b</i> = 5. This gives <i>a</i> + <i>b</i> = 5. We still have two unknowns. Insufficient. Combining both statements: We know <i>b</i>=3 from (1). Substituting this into the equation from (2), we get <i>a</i> + 3 = 5, so <i>a</i> = 2. Now we know <i>a</i> and <i>b</i>, so we can find <i>f(2)</i> = 2(2) + 3 = 7. Sufficient."
    },
    {
      "id": 83,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Order of Operations",
      "question_text": "What is the value of 5 + 3 &times; (8 - 2) &div; 6?",
      "options": [
        {"option": "A", "text": "<sup>4</sup>/<sub>3</sub>"},
        {"option": "B", "text": "4"},
        {"option": "C", "text": "8"},
        {"option": "D", "text": "9"},
        {"option": "E", "text": "24"}
      ],
      "correct_answer": "C",
      "explanation": "Follow the order of operations (PEMDAS/BODMAS): Parentheses first: (8-2) = 6. The expression becomes 5 + 3 &times; 6 &div; 6. Next, Multiplication and Division from left to right: 3 &times; 6 = 18. Then 18 &div; 6 = 3. The expression is now 5 + 3. Finally, Addition: 5 + 3 = 8."
    },
    {
      "id": 84,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Circles and Squares",
      "question_text": "A circle is inscribed within a square. If the area of the circle is 25&pi;, what is the area of the square?",
      "options": [
        {"option": "A", "text": "25"},
        {"option": "B", "text": "50"},
        {"option": "C", "text": "64"},
        {"option": "D", "text": "81"},
        {"option": "E", "text": "100"}
      ],
      "correct_answer": "E",
      "explanation": "The area of the circle is A = &pi;<i>r</i><sup>2</sup>. Given A = 25&pi;, we have &pi;<i>r</i><sup>2</sup> = 25&pi;, so <i>r</i><sup>2</sup> = 25 and the radius <i>r</i> = 5. When a circle is inscribed in a square, the diameter of the circle is equal to the side length of the square. The diameter is 2<i>r</i> = 2(5) = 10. So, the side of the square is 10. The area of the square is side<sup>2</sup> = 10<sup>2</sup> = 100."
    },
    {
      "id": 85,
      "question_type": "Data Sufficiency",
      "difficulty": "Medium",
      "field_of_math": "Exponents",
      "question_text": "If <i>x</i> and <i>y</i> are positive integers, is <i>x</i><sup><i>y</i></sup> > <i>y</i><sup><i>x</i></sup>?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "<i>x</i> = 2",
        "2": "<i>y</i> > 3"
      },
      "correct_answer": "E",
      "explanation": "Statement (1): x=2. The question becomes is 2<sup>y</sup> > y<sup>2</sup>? If y=3, 8<9 (No). If y=4, 16=16 (No). If y=5, 32>25 (Yes). Insufficient. Statement (2): y>3. We don't know x. Insufficient. Combining: x=2 and y>3. If y=4, 2<sup>4</sup> = 16 and 4<sup>2</sup> = 16. The answer is 'No'. If y=5, 2<sup>5</sup> = 32 and 5<sup>2</sup> = 25. The answer is 'Yes'. Since we can get different answers, the statements together are insufficient."
    },
    {
      "id": 86,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Median",
      "question_text": "The salaries of 7 employees in a company are $40k, $45k, $50k, $55k, $60k, $120k, and $130k. What is the difference between the median and mean salary?",
      "options": [
        {"option": "A", "text": "$0"},
        {"option": "B", "text": "$15,000"},
        {"option": "C", "text": "$20,000"},
        {"option": "D", "text": "$25,000"},
        {"option": "E", "text": "$35,000"}
      ],
      "correct_answer": "B",
      "explanation": "The salaries are already in order. The median is the middle value, which is the 4th value: $55,000. To find the mean, sum the salaries and divide by 7. Sum = 40+45+50+55+60+120+130 = 500. Mean = $500,000 / 7 \u2248 $71,428. The difference is approximately $71,428 - $55,000 = $16,428. This is closest to option B ($15,000)."
    },
    {
      "id": 87,
      "question_type": "Problem Solving",
      "difficulty": "Easy",
      "field_of_math": "Algebraic Manipulation",
      "question_text": "If <i>a</i> + <i>b</i> = 7 and <i>a</i> - <i>b</i> = 3, what is the value of <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup>?",
      "options": [
        {"option": "A", "text": "4"},
        {"option": "B", "text": "10"},
        {"option": "C", "text": "21"},
        {"option": "D", "text": "40"},
        {"option": "E", "text": "Cannot be determined"}
      ],
      "correct_answer": "C",
      "explanation": "The expression <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup> is a difference of squares, which can be factored as (<i>a</i> + <i>b</i>)(<i>a</i> - <i>b</i>). We are given the values of both factors. So, <i>a</i><sup>2</sup> - <i>b</i><sup>2</sup> = (7)(3) = 21."
    },
    {
      "id": 88,
      "question_type": "Data Sufficiency",
      "difficulty": "Easy",
      "field_of_math": "Arithmetic",
      "question_text": "A store sells only apples and bananas. What is the total revenue from sales?",
      "options": [
        {"option": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."},
        {"option": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."},
        {"option": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."},
        {"option": "D", "text": "EACH statement ALONE is sufficient."},
        {"option": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient."}
      ],
      "statements": {
        "1": "The store sold 100 apples at $0.50 each.",
        "2": "The store sold 50 bananas at $0.80 each."
      },
      "correct_answer": "C",
      "explanation": "Total revenue is (revenue from apples) + (revenue from bananas). Statement (1) gives the revenue from apples as 100 &times; $0.50 = $50. But it gives no information about bananas. Insufficient. Statement (2) gives the revenue from bananas as 50 &times; $0.80 = $40. But it gives no information about apples. Insufficient. Combining both statements, the total revenue is $50 + $40 = $90. Sufficient."
    },
    {
      "id": 89,
      "question_type": "Problem Solving",
      "difficulty": "Medium",
      "field_of_math": "Angles",
      "question_text": "The angles of a triangle are in the ratio 1:2:3. What is the measure of the largest angle?",
      "options": [
        {"option": "A", "text": "30&deg;"},
        {"option": "B", "text": "60&deg;"},
        {"option": "C", "text": "90&deg;"},
        {"option": "D", "text": "120&deg;"},
        {"option": "E", "text": "150&deg;"}
      ],
      "correct_answer": "C",
      "explanation": "Let the angles be <i>x</i>, 2<i>x</i>, and 3<i>x</i>. The sum of angles in a triangle is 180 degrees. So, <i>x</i> + 2<i>x</i> + 3<i>x</i> = 180. This gives 6<i>x</i> = 180, so <i>x</i> = 30. The angles are 30&deg;, 60&deg;, and 90&deg;. The largest angle is 90&deg;."
    },
    {
      "id": 90,
      "question_type": "Problem Solving",
      "difficulty": "Hard",
      "field_of_math": "Consecutive Integers",
      "question_text": "The sum of five consecutive even integers is 220. What is the value of the smallest of these integers?",
      "options": [
        {"option": "A", "text": "36"},
        {"option": "B", "text": "38"},
        {"option": "C", "text": "40"},
        {"option": "D", "text": "42"},
        {"option": "E", "text": "44"}
      ],
      "correct_answer": "C",
      "explanation": "Let the five consecutive even integers be <i>n</i>, <i>n</i>+2, <i>n</i>+4, <i>n</i>+6, and <i>n</i>+8. Their sum is 5<i>n</i> + 20. We are given that 5<i>n</i> + 20 = 220. Subtracting 20 gives 5<i>n</i> = 200. Dividing by 5 gives <i>n</i> = 40. The smallest integer is 40. Alternatively, the average of consecutive integers is the middle one. 220/5 = 44. So the middle integer is 44. The integers are 40, 42, 44, 46, 48. The smallest is 40."
    }
];
