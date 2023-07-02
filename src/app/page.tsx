'use client'

import { useChat } from 'ai/react'
import { useId } from 'react'

export default function Chat() {
  const { messages, input: messageInput, handleInputChange: handleMessageInputChange, handleSubmit: handleMessageSubmit } = useChat({ id: useId() })
  console.log(messages)
  return (
    <div className='flex w-screen h-screen flex-row bg-gray-700 justify-center'>
      <div className='flex flex-col w-1/2 h-screen bg-gray-800 shadow-xl'>
        <div className='p-5 overflow-y-scroll mb-10'>
          {messages.map(m => (
            <div key={m.id} className={m.role === "user"? "bg-transparent p-2": "bg-gray-700 p-2"}>
              {m.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="absolute bottom-0 flex justify-between w-1/2 shadow-md border border-slate-700">
          <input
            className="w-full text-black p-2 outline-none"
            value={messageInput}
            placeholder="Say something..."
            onChange={handleMessageInputChange}
          />
          <button className="px-5" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
