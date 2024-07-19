export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: " 15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};
export const CODE_SNIPPETS = {
  1: {
    javascript: {
      code: `
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
} 

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
`,
      output: "[ 0, 1 ]\n",
    },
    typescript: {
      code: `
type Params = {
    nums: number[];
    target: number;
}

function twoSum(data: Params): number[] {
    const { nums, target } = data;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum({ nums: [2, 7, 11, 15], target: 9 })); // Output: [0, 1]
`,
      output: "[0, 1]",
    },
    python: {
      code: `
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

print(two_sum([2, 7, 11, 15], 9)) # Output: [0, 1]
`,
      output: "[0, 1]",
    },
    java: {
      code: `
import java.util.*;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // Output: [0, 1]
    }
}
`,

      output: "[0, 1]",
    },
    csharp: {
      code: `
using System;

namespace TwoSumApp {
    class Program {
        static int[] TwoSum(int[] nums, int target) {
            for (int i = 0; i < nums.Length; i++) {
                for (int j = i + 1; j < nums.Length; j++) {
                    if (nums[i] + nums[j] == target) {
                        return new int[] { i, j };
                    }
                }
            }
            return new int[] { };
        }

        static void Main(string[] args) {
            int[] result = TwoSum(new int[] { 2, 7, 11, 15 }, 9);
            Console.WriteLine(string.Join(",", result)); // Output: [0, 1]
        }
    }
}
`,
      output: "[0, 1]",
    },
    php: {
      code: `
<?php

function twoSum($nums, $target) {
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i + 1; $j < count($nums); $j++) {
            if ($nums[$i] + $nums[$j] == $target) {
                return [$i, $j];
            }
        }
    }
    return [];
}

print_r(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

?>
`,
      output: "[0, 1]",
    },
  },
  2: {
    javascript: {
      code: `
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
`,
      output: "olleh",
    },
    typescript: {
      code: `
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
`,
      output: "olleh",
    },
    python: {
      code: `
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello")) # Output: "olleh"
`,
      output: "olleh",
    },
    java: {
      code: `
public class ReverseString {
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(reverseString("hello")); // Output: "olleh"
    }
}
`,
      output: "olleh",
    },
    csharp: {
      code: `
using System;

namespace ReverseStringApp {
    class Program {
        static string ReverseString(string s) {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }

        static void Main(string[] args) {
            Console.WriteLine(ReverseString("hello")); // Output: "olleh"
        }
    }
}
`,
      output: "olleh",
    },
    php: {
      code: `
<?php

function reverseString($str) {
    return strrev($str);
}

echo reverseString("hello"); // Output: "olleh"

?>
`,
      output: "olleh",
    },
  },
  3: {
    javascript: {
      code: `
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
`,
      output: "[2,3,4,5,8]",
    },
    typescript: {
      code: `
function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
`,
      output: "[2, 3, 4, 5, 8]",
    },
    python: {
      code: `
def sort_array(arr):
    return sorted(arr)

print(sort_array([5, 3, 8, 4, 2])) # Output: [2, 3, 4, 5, 8]
`,
      output: "[2, 3, 4, 5, 8]",
    },
    java: {
      code: `
import java.util.Arrays;

public class SortArray {
    public static int[] sortArray(int[] arr) {
        Arrays.sort(arr);
        return arr;
    }

    public static void main(String[] args) {
        int[] result = sortArray(new int[]{5, 3, 8, 4, 2});
        System.out.println(Arrays.toString(result)); // Output: [2, 3, 4, 5, 8]
    }
}
`,
      output: "[2, 3, 4, 5, 8]",
    },
    csharp: {
      code: `
using System;
using System.Linq;

namespace SortArrayApp {
    class Program {
        static int[] SortArray(int[] arr) {
            Array.Sort(arr);
            return arr;
        }

        static void Main(string[] args) {
            int[] result = SortArray(new int[] { 5, 3, 8, 4, 2 });
            Console.WriteLine(string.Join(",", result)); // Output: [2, 3, 4, 5, 8]
        }
    }
}
`,
      output: "[2, 3, 4, 5, 8]",
    },
    php: {
      code: `
<?php

function sortArray($arr) {
    sort($arr);
    return $arr;
}

print_r(sortArray([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]

?>
`,
      output: "[2, 3, 4, 5, 8]",
    },
  },
  4: {
    javascript: {
      code: `
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alex"); // Output: "Hello, Alex!"
`,
      output: "Hello, Alex!",
    },
    typescript: {
      code: `
type Params = {
    name: string;
}

function greet(data: Params) {
    console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" }); // Output: "Hello, Alex!"
`,
      output: "Hello, Alex!",
    },
    python: {
      code: `
def greet(name):
    print("Hello, " + name + "!")

greet("Alex") # Output: "Hello, Alex!"
`,
      java: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Alex!"); // Fixed Output: "Hello, Alex!"
    }
}
`,
      output: "Hello, Alex!",
    },
    csharp: {
      code: `
using System;

namespace HelloWorld {
    class Hello {
        static void Main(string[] args) {
            Console.WriteLine("Hello, Alex!"); // Fixed Output: "Hello, Alex!"
        }
    }
}
`,
      output: "Hello, Alex!",
    },
    php: {
      code: `
<?php

$name = 'Alex';
echo "Hello, " . $name . "!"; // Fixed Output: "Hello, Alex!"

?>
`,
      output: "Hello, Alex!",
    },
  },
};

import img from "../assets/problems-img/image.png";
export const questions = [
  {
    id: 1,
    title: "Two sum",
    solution: { img },
    acceptance: "57.7%",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "reverse string",
    solution: { img },
    acceptance: "57.7%",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Sort the array",
    solution: { img },
    acceptance: "57.7%",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Fix the Code",
    solution: { img },
    acceptance: "57.7%",
    difficulty: "Hard",
  },
];

import icon1 from "../assets/card1_img1.jpg";
// import icon2 from '../assets/card1_img2.png'
// import icon3 from '../assets/card1_img3.jpg'
// import icon4 from '../assets/card1_img4.jpg'

import icon5 from "../assets/card2_img1.jpg";
import icon6 from "../assets/card2_img2.png";
import icon7 from "../assets/card2_img3.jpg";
import icon8 from "../assets/card2_img4.png";

import icon9 from "../assets/card3_img1.png";
import icon10 from "../assets/card3_img2.jpg";
import icon11 from "../assets/card3_img3.jpg";
import icon12 from "../assets/card3_img4.jpg";

export const CardData1 = [
  {
    id: 1,
    title: "DSA",
    img: icon1,
    link: "/problems",
  },
];

export const CardData2 = [
  {
    id: 1,
    title: "HTML and CSS",
    img: icon5,
    link: "https://www.youtube.com/watch?v=mU6anWqZJcc",
  },
  {
    id: 2,
    title: "JavaScript",
    img: icon6,
    link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
  },
  {
    id: 3,
    title: "Frontend Framework (React)",
    img: icon7,
    link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
  {
    id: 4,
    title: "Backend Development (Node.js)",
    img: icon8,
    link: "https://www.youtube.com/watch?v=RLtyhwFtXQA",
  },
];
export const CardData3 = [
  {
    id: 1,
    title: "BEST JAVASCRIPT INTERVIEW",
    img: icon9,
    link: "https://www.youtube.com/watch?v=QmfyWw3Cth8",
  },
  {
    id: 2,
    title: "DSA MOCK INTERVIEW",
    img: icon10,
    link: "https://www.youtube.com/watch?v=cyJM2khzIA4",
  },
  {
    id: 3,
    title: "Java Mock Interview for Freshers",
    img: icon11,
    link: "https://www.youtube.com/watch?v=UdRza_PDCeU",
  },
  {
    id: 4,
    title: "Next.JS Mock Interview",
    img: icon12,
    link: "https://www.youtube.com/watch?app=desktop&v=6FFO-Cz1lhU",
  },
];
