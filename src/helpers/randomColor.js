const colors = [
  "bg-red-500",
  "bg-orange-300",
  "bg-yellow-400",
  "bg-green-600",
  "bg-teal-400",
  "bg-blue-500",
  "bg-indigo-600",
  "bg-purple-500",
  "bg-pink-400",
  "bg-red-400",
  "bg-orange-500",
  "bg-yellow-600",
  "bg-green-400",
  "bg-teal-500",
  "bg-blue-600",
  "bg-indigo-500",
  "bg-purple-400",
  "bg-pink-500",
];

export const getRandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
