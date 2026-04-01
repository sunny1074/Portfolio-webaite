declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | (string | Element)[],
      vars?: any
    );
    lines: Element[];
    words: Element[];
    chars: Element[];
    revert(): void;
  }
}