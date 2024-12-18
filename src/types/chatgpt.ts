export interface chatMsg {
    role: "user" | "assistant" | "system";
    content: string;
}