import React from "react";
import { DELAY_FAST, DELAY_NORMAL, DELAY_SLOW } from "../assets/js/utils";

export default function Header() {
  return (
    <div>
      <h1 className="f1 mv3-ns">Path Visualiser</h1>
      <div>
        <select
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          name="Algorithm"
        >
          <option value="Dijktsra">Dijkstra</option>
          <option value="A*">A*</option>
          <option value="Swarm">Swarm</option>
          <option value="extra">Extra</option>
        </select>
        <select
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          name="Speed"
          defaultValue={150}
        >
          <option value={DELAY_SLOW}>Slow</option>
          <option value={DELAY_NORMAL}>Normal</option>
          <option value={DELAY_FAST}>Fast</option>
        </select>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="Visualise"
        >
          Visualise
        </button>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="Clear"
        >
          Clear
        </button>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="HowTo"
        >
          How To Use!
        </button>
      </div>
    </div>
  );
}
