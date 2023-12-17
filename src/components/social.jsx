import github from "/assets/github.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";

export default function Social() {
  return (
    <div className="flex flex-col p-16 gap-8">
      <div>
        <img src={github} width="30" height="30" />
      </div>
      <div>
        <img src={linkedin} width="30" height="30" />
      </div>
      <div>
        <img src={instagram} width="30" height="30" />
      </div>
    </div>
  );
}
