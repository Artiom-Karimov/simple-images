import { resolve } from 'path';
import { access, mkdir, writeFile } from 'fs/promises';
import { ImageBuilder } from './image-builder';

const output = resolve(__dirname, '..', 'output');

const createFolder = async () => {
  try {
    await access(output);
  } catch (error) {
    await mkdir(output);
  }
};

export const save = async (
  image: ImageBuilder,
  fileName: string,
): Promise<void> => {
  await createFolder();
  const filePath = resolve(output, `${fileName}.png`);
  await writeFile(filePath, image.toBuffer());
};
