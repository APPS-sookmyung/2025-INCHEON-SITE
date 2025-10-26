import textureUrl from '../assets/svg/texture-tile.svg';

/**
 * @typedef {Object} BlobLayer
 * @property {string} url - blob 이미지 경로
 * @property {string} [blendMode] - blob별 blend-mode
 */

/**
 * texture(위) + blobs(아래)
 * @param {{ blobs?: BlobLayer[] }} [options]
 * @returns {Object} React style 객체
 */
export function backgroundLayer({blobs = []} = {}) {
  const images = [textureUrl, ...blobs.map((b) => b.url)]
    .map((url) => `url(${url})`)
    .join(', ');

  const repeats = ['repeat', ...blobs.map(() => 'no-repeat')].join(', ');

  // blend만 제어 — 텍스처는 normal, blob은 multiply
  const blends = [
    'normal',
    ...blobs.map((b) => b.blendMode || 'multiply'),
  ].join(', ');

  return {
    backgroundImage: images,
    backgroundRepeat: repeats,
    backgroundBlendMode: blends,
  };
}

/**
 * texture만 필요한 섹션용 (blob 없음)
 */
export function textureOnlyLayer() {
  return {
    backgroundImage: `url(${textureUrl})`,
    backgroundRepeat: 'repeat',
  };
}
