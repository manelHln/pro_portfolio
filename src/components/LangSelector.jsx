import i18next from "i18next";

const LangSelector = () => {
  return (
    <select
      defaultValue="en"
      className="selector"
      onChange={(e) => i18next.changeLanguage(e.target.value)}
    >
      <option value={"en"}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 En</option>
      <option value={"fr"}>🇫🇷 Fr</option>
    </select>
  );
};

export default LangSelector;
