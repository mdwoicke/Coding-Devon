import ChatHeader from './chat-header'
import ChatMessagesAndInput from '@/components/chat/chat-messages-and-input/chat-messages-and-input'
import { showChatBorders } from '@/lib/config'

export default function Chat({
    sessionId,
    viewOnly = false,
    headerIcon,
    loading = false,
}: {
    sessionId: string | null
    viewOnly?: boolean
    headerIcon?: JSX.Element
    loading?: boolean
}) {
    return (
        <div className={`rounded-lg h-full w-full max-w-4xl flex flex-col flex-2 ${showChatBorders ? 'border border-outlinecolor ml-3 rounded-md' : ''}`}>
            <ChatHeader sessionId={sessionId} headerIcon={headerIcon} />
            <div className="flex-1 overflow-y-auto">
                <ChatMessagesAndInput
                    viewOnly={viewOnly}
                    loading={loading}
                    sessionId={sessionId as string}
                />
            </div>
        </div>
    )
}
