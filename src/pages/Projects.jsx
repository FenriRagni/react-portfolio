import Project from "../components/Project";
export default function Projects(){
  return (
    <>
    <div className="row text-center">
      <h2 className="text">
    Projects
    </h2>
    </div>
    
    <div className="row mt-4">
        <Project title={"MySequel Adventure"} image="project2.jpg" repo="https://github.com/taylasagerios/my-sequel-adventure" deploy="https://my-sequel-adventure-a9247b63bc9a.herokuapp.com/"/>
        <Project title={"Food Finder"} image="project1.jpg" repo="https://github.com/FenriRagni/food-finder" deploy="https://fenriragni.github.io/food-finder/"/>
        <Project title={"Just Another Text Editor"} image="jate.jpg" repo="https://github.com/FenriRagni/text-editor" deploy="https://super-duper-text-editor.onrender.com/"/>
    </div>
    <div className="row mt-4">
      <Project title={'Note Taker'} image='notes.jpg' repo="https://github.com/FenriRagni/make-a-note" deploy="https://make-a-note-907915b8410c.herokuapp.com/"/>
      <Project title={'Weather'} image='weather.jpg' repo="https://github.com/FenriRagni/and-now-the-weather" deploy="https://fenriragni.github.io/and-now-the-weather/"/>
      <Project title={'Password Generator'} image='pwd.jpg' repo="https://github.com/FenriRagni/pwd-gen" deploy="https://fenriragni.github.io/pwd-gen/"/>
    </div>
    </>
  )
}