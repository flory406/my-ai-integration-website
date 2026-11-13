import { STATS, IMPORTERS } from "../data/site.js";
import Icon from "./Icon.jsx";
import Sparkline from "./Sparkline.jsx";

const SPARKS = [
  [20, 40, 28, 52, 34, 60, 38, 66, 44, 70],
  [30, 50, 36, 44, 58, 40, 64, 48, 70, 52],
  [18, 30, 46, 34, 55, 42, 60, 50, 66, 58],
  [40, 32, 54, 38, 60, 44, 36, 58, 48, 64],
];

// monthly bar-chart data (two bars per month)
const MONTHS = [
  { m: "Dec", a: 40, b: 24 },
  { m: "Jan", a: 13, b: 26 },
  { m: "Feb", a: 24, b: 28 },
  { m: "Mar", a: 14, b: 9 },
  { m: "Apr", a: 33, b: 18 },
  { m: "May", a: 14, b: 26 },
  { m: "Jun", a: 30, b: 18 },
];

export default function DashboardMock({ compact = false }) {
  return (
    <div className={`dash ${compact ? "dash--compact" : ""}`}>
      {/* top bar */}
      <div className="dash__bar">
        <div className="dash__logo">
          REDSUN<span className="dash__logo-dot" />
        </div>
        <div className="dash__menu">
          <span className="is-active">
            <Icon name="analytics" size={16} /> Analytics
          </span>
          <span>
            <Icon name="bag" size={16} /> Products
          </span>
          <span>
            <Icon name="users" size={16} /> Customers
          </span>
          <span>
            <Icon name="campaign" size={16} /> Campaigns
          </span>
          <span>
            <Icon name="settings" size={16} /> Settings
          </span>
        </div>
        <div className="dash__bar-right">
          <span className="dash__bell">
            <Icon name="bell" size={18} />
          </span>
          <span className="dash__avatar" />
        </div>
      </div>

      {/* body */}
      <div className="dash__body">
        <div className="dash__head">
          <h3>Dashboard</h3>
          <span className="dash__invite">
            <Icon name="users" size={16} /> Invite users
          </span>
        </div>

        {/* stat cards */}
        <div className="dash__stats">
          {STATS.map((s, i) => (
            <div className={`dstat ${i === 1 ? "dstat--lit" : ""}`} key={s.label}>
              <div className="dstat__top">
                <span className="dstat__label">{s.label}</span>
                <span className={`dstat__delta ${s.up ? "up" : "down"}`}>
                  <Icon name={s.up ? "arrow" : "arrow"} size={12} />
                  {s.delta}
                </span>
              </div>
              <div className="dstat__row">
                <span className="dstat__value">{s.value}</span>
                <Sparkline points={SPARKS[i]} width={88} height={34} />
              </div>
            </div>
          ))}
        </div>

        {/* two panels */}
        <div className="dash__panels">
          <div className="dpanel">
            <div className="dpanel__head">
              <h4>Import data into Front Dashboard</h4>
              <p>See and talk to your users and leads immediately</p>
            </div>
            <ul className="dimport">
              {IMPORTERS.map((im) => (
                <li key={im.name}>
                  <span className="dimport__icon" style={{ background: im.color }} />
                  <span className="dimport__meta">
                    <strong>{im.name}</strong>
                    <small>{im.type}</small>
                  </span>
                  <span className="dimport__btn">Launch importer</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dpanel">
            <div className="dpanel__head">
              <h4>Monthly expenses</h4>
            </div>
            <div className="dchart">
              <div className="dchart__grid">
                <span>100</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
              <div className="dchart__bars">
                {MONTHS.map((mo) => (
                  <div className="dchart__group" key={mo.m}>
                    <div className="dchart__pair">
                      <span className="dchart__bar a" style={{ height: `${mo.a}%` }} />
                      <span className="dchart__bar b" style={{ height: `${mo.b}%` }} />
                    </div>
                    <small>{mo.m}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
