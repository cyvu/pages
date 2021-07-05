'use strict'
import sharp from 'sharp';

sharp('../private_html/img/img.jpg')
  .resize(1920,1080)
  .toFile('rs_img.jpg');
