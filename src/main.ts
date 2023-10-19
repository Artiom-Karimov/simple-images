import { save } from './save';
import { ImageBuilder } from './image-builder';

export const start = async () => {
  const width = 1200;
  const height = 627;

  const image = new ImageBuilder(width, height);
  image.fill('#764abc').addHead('Hello universe!', '#fff');

  await save(image, 'purple');
};

start();
