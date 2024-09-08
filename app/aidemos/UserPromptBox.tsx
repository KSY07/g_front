interface UserPromptBoxProps {
  prompt: string
}

export const UserPromptBox = (p:UserPromptBoxProps) => {


  return (
    <div className="flex flex-row justify-end w-full p-2 mt-2">
      <p className="w-1/2 h-12 rounded-md p-3 bg-blue-400">{p.prompt}</p>
    </div>
  );
}