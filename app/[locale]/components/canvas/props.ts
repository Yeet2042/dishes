import { ICloud } from 'react-icon-cloud'

export const CloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      scale: 1.4
    }
  },
  options: {
    clickToFront: 500,
    decel: 1,
    depth: 0.75,
    imageScale: 1,
    initial: [0.05, -0.05],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
    radiusX: 0.75,
    radiusY: 0.75,
    radiusZ: 0.75
  }
}