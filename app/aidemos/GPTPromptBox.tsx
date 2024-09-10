interface UserPromptBoxProps {
  prompt: string
}

export const GPTPromptBox = (p:UserPromptBoxProps) => {

  return (
    <div className="flex flex-row justify-start w-full p-8">
      <p className="w-1/2 h-12 rounded-md p-3 bg-gray-600">{p.prompt}</p>
    </div>
  )
}