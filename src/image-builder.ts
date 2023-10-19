import { Canvas, createCanvas, CanvasRenderingContext2D } from 'canvas';

export class ImageBuilder {
  private readonly canvas: Canvas;
  private readonly context: CanvasRenderingContext2D;

  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    this.canvas = createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
  }

  toBuffer(): Buffer {
    return this.canvas.toBuffer();
  }

  fill(color: string): ImageBuilder {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
    return this;
  }

  addHead(text: string, color: string): ImageBuilder {
    this.context.font = "bold 70pt 'Arial'";
    this.context.textAlign = 'center';
    this.context.fillStyle = color;
    this.context.fillText(text, Math.floor(this.width / 2), 170);

    return this;
  }

  addRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    fill: string,
  ): ImageBuilder {
    this.context.fillStyle = fill;
    this.context.fillRect(x, y, width, height);
    return this;
  }
}
