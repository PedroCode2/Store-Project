import "./Footer.css";

export default function Footer () {
    return (
        <div>
          <footer className="bg-black text-center text-lg-start">
            <div className="text-center text-white p-3">
              Copyright:
              <a
                className="Github"
                href="https://github.com/PedroCod?tab=repositories"
                rel="noreferrer"
                target="_blank"
              >
                Pedro Cod©
              </a>
            </div>
          </footer>
        </div>
      );
}