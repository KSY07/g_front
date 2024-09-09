interface UserPromptBoxProps {
  prompt: string
}

export const GPTPromptBox = (p:UserPromptBoxProps) => {

  return (
    <div className="flex flex-row justify-start w-full p-8">
      <p className="w-auto h-auto rounded-md p-3 bg-gray-600" style={{whiteSpace:"pre"}}>{p.prompt}</p>
    </div>
  )
}