import { Emoji } from "@/components/TodoForm";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  openPicker: boolean;
}

const EmojiPicker = ({ onSelect, openPicker }: EmojiPickerProps) => {
  return (
    <div className={`emoji-picker ${openPicker && "open"}`}>
      <Picker
        data={data}
        emojiSize={20}
        emojiButtonSize={28}
        onEmojiSelect={(emoji: Emoji) => {
          if (!emoji?.native) return;
          onSelect(emoji.native);
        }}
        maxFrequentEmoji={0}
      />
    </div>
  );
};

export default EmojiPicker;
