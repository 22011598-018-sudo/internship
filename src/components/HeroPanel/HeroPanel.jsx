import Logo from "@/components/Logo";
import { CheckIcon } from "@/components/icons";
import "./HeroPanel.css";

const TASKS = [
  { id: 1, title: "Set up the project repo", done: true },
  { id: 2, title: "Build the login screen", done: true },
  { id: 3, title: "Connect to the API", done: false },
];

export default function HeroPanel() {
  return (
    <aside className="hero">
      <Logo light />

      <div className="hero__body">
        <h1 className="hero__title">
          Your first real work
          <br />
          starts here.
        </h1>
        <p className="hero__lead">
          Track tasks, get feedback from your mentor, and finish with a certificate you can show.
        </p>
      </div>

      <div className="hero__stack" aria-hidden="true">
        <div className="card card--back" />

        <div className="card card--main">
          <div className="card__row">
            <span className="card__title">Week 6 of 12</span>
            <span className="card__pill">On track</span>
          </div>
          <div className="card__bar">
            <span className="card__fill" />
          </div>
          <ul className="card__tasks">
            {TASKS.map((t) => (
              <li key={t.id} className={t.done ? "is-done" : ""}>
                <span className="card__tick">{t.done && <CheckIcon width={12} height={12} />}</span>
                {t.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="card card--note">
          <span className="card__avatar">S</span>
          <p>Clean component structure. Ship it.</p>
        </div>
      </div>
    </aside>
  );
}
