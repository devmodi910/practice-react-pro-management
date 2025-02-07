import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoprojectSelected";
import SideBar from "./components/Sidebar";

function App() {
  const [projectsState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject />
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
