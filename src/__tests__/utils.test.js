import { imageTemplate } from '../utils';

describe('utils', () => {
  describe('imageTemplate', () => {
    it('should return correct url from template', () => {
      const url = imageTemplate(
        'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Packshot.jpg{?width,height}&template=abcstudios'
      );
      expect(url(100, 100)).toEqual(
        'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Packshot.jpg?width=100&height=100&template=abcstudios'
      );
    });
  });
});
