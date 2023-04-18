import "./index.css";
import { Rive } from "@rive-app/canvas";

const minHeight = 60;
const header = document.getElementById("header");
const canvas = document.getElementById("logo") as HTMLCanvasElement;

const logoAnimation = new Rive({
  src: "./logo.riv",
  canvas: canvas,
  stateMachines: ["zoom"],
  autoplay: true,
  onLoad: () => {
    logoAnimation.resizeDrawingSurfaceToCanvas();
    const progressInput = logoAnimation
      .stateMachineInputs("zoom")
      .find(({ name }) => name === "progress")!;
    progressInput.value = 100;

    const onUpdate = () => {
      const { scrollY, innerHeight } = window;
      if (scrollY > innerHeight - minHeight) {
        header!.style.height = minHeight + "px";
      } else {
        header!.style.height = `${innerHeight - scrollY}px`;
      }
      const progress =
        100 - ((scrollY - minHeight) / (innerHeight - minHeight)) * 100;
      progressInput.value = progress;
      logoAnimation.resizeDrawingSurfaceToCanvas();
    };
    onUpdate();
    window.addEventListener("scroll", onUpdate);
    window.addEventListener("resize", () => {
      logoAnimation.resizeDrawingSurfaceToCanvas();
    });
  },
});
