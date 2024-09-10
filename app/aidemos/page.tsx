"use client"
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { UserPromptBox } from "@/app/aidemos/UserPromptBox";
import {GPTPromptBox} from "@/app/aidemos/GPTPromptBox";
import axios from "axios";
import { Radio, RadioGroup } from "@nextui-org/radio";

interface PromptType {
  type: string,
  result: string,
}

export default function AIDemos() {
  const [requestType, setRequestType] = useState<string>();
  const [prompt, setPrompt] = useState<string>();
  const [userPromptList, setUserPromptList] = useState<any[]>([]);
  const [gptPromptList, setGPTPromptList] = useState<any[]>([]);

  const onClickSendMessage = () => {
    if(prompt !== null && prompt.length > 0) {
      setUserPromptList([...userPromptList, prompt]);
      if(requestType === "prompt") {
        axios.post("/gpt/request", {
          prompt: prompt
        }).then(response => {
          console.log(response.data);
          setGPTPromptList([...gptPromptList, response.data.gpt_response.content]);
        }).catch(err => console.error(err));
        setPrompt("");
      }
      else {
        axios.post("/gpt/request/image", {
          prompt: prompt
        }).then(response => {
          console.log(response.data);
          setGPTPromptList([...gptPromptList, response.data.gpt_response.content])
        }).catch(err => console.error(err));
        setPrompt("");
      }
    }
  }

  const onPressEnter = (e:React.KeyboardEvent) => {
    if(e.key == "Enter") {
      onClickSendMessage();
    }
  }
  const ExamplePrompt = "안녕하세요. AI 인테리어 맞춤 상담원 공손이 입니다.\n" +
    "\n" +
    "- 구체적인 수치와 내용을 적어주시면, 더. 높은 품질의 답변을 드릴게요.\n" +
    "\n" +
    "  ex) \n" +
    "- 화이트 와 우드톤의 색상을 쓴 순대국집을 디자인해줘 \n" +
    "- (치수를  적고) 단면도를 그려줘";

  return (<>
    <section className="flex flex-col">
      <p className="text-3xl">AI 맞춤 설계(Beta)</p>
      <div>
        <RadioGroup
          label="요청 유형"
          orientation="horizontal"
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
        >
          <Radio value={"prompt"}/>
          <Radio value={"image"} />
        </RadioGroup>
      </div>
      <section className="flex flex-col">
        <div id="chatBox" className="w-full h-96 border-1 border-gray-300 rounded-lg mt-10 overflow-y-auto">
          <GPTPromptBox prompt={ExamplePrompt} />
          {
            userPromptList.map((prompt) => {
              const gptResponse = "TEST RESPONSE";
              return (
                <>
                  <UserPromptBox prompt={prompt} />
                </>
              )
            })
          }
          {
            gptPromptList.map((prompt) => {
              return (
                <>
                  <GPTPromptBox prompt={prompt} />
                </>
              )
            })
          }
        </div>
        <div id="chatInput" className="flex flex-row mt-5">
          <Input type="text"
                 size="lg"
                 width="200px"
                 value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}
                 onKeyDown={(e) => onPressEnter(e)}
          />
          <Button size="lg" color="primary" className="ml-5" onClick={onClickSendMessage}>보내기</Button>
        </div>
      </section>
    </section>
  </>);
}



