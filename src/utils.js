export async function http(url) {
  return fetch(url).then(res => {
    if (!res.ok) {
      return res.json().then(e => {
        return Promise.reject(e);
      });
    }

    return res.json();
  });
}

export function imageTemplate(imageUrl) {
  const frag = imageUrl.split('{?width,height}');

  return (width, height) => {
    return `${frag[0]}?width=${width}&height=${height}${frag[1] || ''}`;
  };
}
