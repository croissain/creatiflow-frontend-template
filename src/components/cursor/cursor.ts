import { gsap } from "gsap";
export class Cursor {
  protected _cursor: HTMLElement | null;
  constructor() {
    this._cursor = document.getElementById("js-cursor");
    this.cursorFunc();
  }

  cursorFunc() {
    document.body.style.cursor = "none";
    const cursor = this._cursor;
    if (!cursor) return;
    // Custom cursor
    window.addEventListener("mousemove", moveCursor);

    function moveCursor(e: MouseEvent) {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    }

    //default cursor
    const defaultCursor = {
      backgroundColor: "transparent",
      color: "#fff",
      height: "1.5rem",
      width: "1.5rem",
      border: "1px solid #B0B0B0",
    };

    //cursor depend attr
    const hoverList = document.querySelectorAll(".hover");

    hoverList.forEach((hoverEffect) => {
      hoverEffect.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentTarget = e.currentTarget as HTMLElement;
        if (!currentTarget) return;

        let cursorContent = currentTarget.getAttribute("data-content")!;
        let cursorBgColor = currentTarget.getAttribute("data-bgcolor");
        let cursorSize = currentTarget.getAttribute("data-size");
        let cursorTextColor = currentTarget.getAttribute("data-color");
        let cursorTextSize = currentTarget.getAttribute("data-fontsize")!;

        cursor.classList.add("active");
        const cursorInnerText =
          document.querySelector<HTMLElement>(".cursor .content")!;
        if (cursorInnerText) {
          cursorInnerText.innerHTML = cursorContent;
          cursorInnerText.style.fontSize = cursorTextSize;
        }
        Object.assign(cursor.style, {
          backgroundColor: cursorBgColor,
          color: cursorTextColor,
          height: cursorSize,
          width: cursorSize,
          border: "none",
        });
      });

      hoverEffect.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        document.querySelector(".cursor .content")!.innerHTML = "";
        Object.assign(cursor.style, defaultCursor);
      });
    });
  }
}
