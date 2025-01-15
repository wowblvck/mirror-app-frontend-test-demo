import { useEffect } from "react";
import { Posts } from "./views/Posts";
import { Settings } from "./views/Settings";
import { useUnit } from "effector-react";
import { getSettingsFx } from "./models/settings/model";
import { Link } from "@nextui-org/react";

function App() {
  const fetchSettings = useUnit(getSettingsFx);

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <div className="h-dvh w-full flex dark text-foreground">
      <aside className="h-full w-full max-w-[300px] bg-zinc-900 p-4 flex flex-col justify-between">
        <Settings />
        <Link href="https://mirror-app.com/" target="_blank">
          Mirror App Team
        </Link>
      </aside>
      <main className="w-full bg-zinc-100 p-6 overflow-y-auto flex flex-col">
        <Posts />
      </main>
    </div>
  );
}

export default App;
