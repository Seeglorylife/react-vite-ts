import { useState, useEffect } from "react";
import reactLogo from "assets/react.svg";
import viteLogo from "/vite.svg";
import { useTranslation } from "react-i18next";
import "./style.css";

function DemoComp() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    i18n.changeLanguage("en"); // 改变语言，同步国际化
  }, [i18n]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <span>翻译示例：{t("common.more")}</span>
      </p>
    </>
  );
}

export default DemoComp;
