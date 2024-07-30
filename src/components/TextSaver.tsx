import { useEffect, useState } from "react";

const TextSaver = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSaveText = () => {
    window.localStorage.setItem("inputText", inputValue);
  };
  const handleDeleteText = () => {
    window.localStorage.removeItem("inputText");
    setInputValue("");
  };

  useEffect(() => {
    const savedText = window.localStorage.getItem("inputText");
    if (savedText != null) {
      setInputValue(savedText);
      return;
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <input
        type="text"
        placeholder="Введите текст"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-transparent px-6 py-2 border"
      />
      <button onClick={handleSaveText}>Сохранить текст</button>
      <button onClick={handleDeleteText}>Удалить текст</button>
    </div>
  );
};
export default TextSaver;
