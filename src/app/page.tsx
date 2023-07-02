'use client'

import { useChat } from 'ai/react'
import { useId } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ id: useId() })
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
