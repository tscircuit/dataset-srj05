import { AutoroutingPipelineSolver } from "@tscircuit/capacity-autorouter"
import { getSvgFromGraphicsObject } from "graphics-debug"
import { useMemo } from "react"
import sampleFile from "../sparkfun-boards/SparkFun-Air-Velocity-Sensor-Breakout-FS3000-1005/sample001_SparkFun-Air-Velocity-Sensor-Breakout-FS3000-1005.circuit.simple-route.json"

const sample = sampleFile.simpleRouteJson

export default function SampleFixture() {
  const svg = useMemo(() => {
    const solver = new AutoroutingPipelineSolver(structuredClone(sample))
    return getSvgFromGraphicsObject(solver.visualize(), {
      backgroundColor: "#ffffff",
      svgWidth: 1200,
      svgHeight: 800,
    })
  }, [])

  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>SRJ05 · SparkFun FS3000-1005</h1>
      <p>
        {sample.obstacles.length} obstacles · {sample.connections.length}{" "}
        connections
      </p>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: This SVG is generated locally from checked-in SRJ data. */}
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </main>
  )
}
