import userEvent from "@testing-library/user-event";
import useToggle from "../customHooks/toggleHook";
import "./FetchApiPage.css";
function FetchApiPage() {
  const [theme, setTheme] = useToggle(true);
  const [mood, setMood] = useToggle(true);

  return (
    <div className={theme ? "light-mode" : "dark-mode"}>
      <h1>{mood ? "😂" : "😭"}</h1>
      <button
        onClick={() => {
          setMood();
        }}
      >
        Change mood
      </button>
      <button
        onClick={() => {
          setTheme();
        }}
      >
        Change theme
      </button>
    </div>
  );
}
export default FetchApiPage;
