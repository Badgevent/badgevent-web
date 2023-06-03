import { Component, For } from "solid-js";

let colors: { r: number; g: number; b: number }[] = [];

function rgb(r: number, g: number, b: number) {
  colors = [...colors, { r, g, b }];
}

const RGBToHSB = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0
      ? 0
      : n && v === r
      ? (g - b) / n
      : v === g
      ? 2 + (b - r) / n
      : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
};

function step(r: number, g: number, b: number, repetitions: number) {
  let lum = Math.sqrt(0.241 * r + 0.691 * g + 0.068 * b);
  let [h, s, v] = RGBToHSB(r, g, b);
  let h2 = Math.floor(h * repetitions);
  let lum2 = Math.floor(lum * repetitions);
  let v2 = Math.floor(v * repetitions);
  return [h2, lum, v2];
}

// Thanks Bence Szabo - https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6
rgb(238, 0, 0);
rgb(221, 51, 0);
rgb(170, 102, 0);
rgb(0, 136, 0);
rgb(17, 136, 0);
rgb(34, 136, 0);
rgb(51, 136, 0);
rgb(238, 0, 17);
rgb(221, 51, 17);
rgb(170, 102, 17);
rgb(0, 136, 17);
rgb(17, 136, 17);
rgb(34, 136, 17);
rgb(238, 0, 34);
rgb(221, 51, 34);
rgb(170, 102, 34);
rgb(0, 136, 34);
rgb(17, 136, 34);
rgb(34, 136, 34);
rgb(221, 51, 51);
rgb(170, 102, 51);
rgb(0, 136, 51);
rgb(17, 136, 51);
rgb(34, 136, 51);
rgb(221, 51, 68);
rgb(119, 119, 68);
rgb(0, 136, 68);
rgb(17, 136, 68);
rgb(204, 68, 85);
rgb(187, 85, 85);
rgb(119, 119, 85);
rgb(0, 136, 85);
rgb(204, 68, 102);
rgb(187, 85, 102);
rgb(119, 119, 102);
rgb(221, 34, 119);
rgb(204, 68, 119);
rgb(153, 102, 119);
rgb(221, 17, 136);
rgb(221, 34, 136);
rgb(153, 102, 136);
rgb(102, 119, 136);
rgb(221, 0, 153);
rgb(221, 17, 153);
rgb(204, 51, 153);
rgb(102, 119, 153);
rgb(221, 0, 170);
rgb(204, 51, 170);
rgb(187, 68, 170);
rgb(170, 85, 170);
rgb(136, 102, 170);
rgb(85, 119, 170);
rgb(204, 34, 187);
rgb(187, 68, 187);
rgb(136, 102, 187);
rgb(68, 119, 187);
rgb(204, 17, 204);
rgb(153, 85, 204);
rgb(119, 102, 204);
rgb(0, 119, 204);
rgb(17, 119, 204);
rgb(34, 119, 204);
rgb(51, 119, 204);
rgb(204, 0, 221);
rgb(187, 51, 221);
rgb(170, 68, 221);
rgb(102, 102, 221);
rgb(187, 34, 238);
rgb(136, 85, 238);
rgb(85, 102, 238);
rgb(187, 0, 255);
rgb(187, 17, 255);
rgb(170, 51, 255);
rgb(153, 68, 255);
rgb(119, 85, 255);
rgb(68, 102, 255);

const sorted = [...colors].sort(function (
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number }
) {
  let [a_hue, a_lum, a_value] = step(a.r, a.g, a.b, 18);
  let [b_hue, b_lum, b_value] = step(b.r, b.g, b.b, 18);

  if (a_hue != b_hue) {
    return a_hue - b_hue;
  } else if (a_lum != b_lum) {
    return a_lum - b_lum;
  }
  return a_value - b_value;
});

const lights = [...sorted].filter(function (color: {
  r: number;
  g: number;
  b: number;
}) {
  let [, S] = RGBToHSB(color.r, color.g, color.b);
  return S >= 60;
});

const darks = [...sorted].filter(function (color: {
  r: number;
  g: number;
  b: number;
}) {
  let [, S] = RGBToHSB(color.r, color.g, color.b);
  return S < 60;
});

function getHue(color: { r: number; g: number; b: number }) {
  let [H] = RGBToHSB(color.r, color.g, color.b);
  return H;
}

export const Color: Component<{
  color: { r: number; g: number; b: number };
}> = (props) => {
  const color = props.color;
  return (
    <div class="-mb-2 relative">
      <div
        class="w-6 h-6 mr-1 inline-block"
        style={`background-color: rgb(${color.r}, ${color.g}, ${color.b})`}
      ></div>
      <div class="w-12 inline-block">{Math.round(getHue(color))}</div>
      <div class="inline-block w-40">
        #{color.r.toString(16).padStart(2, "0")}
        {color.g.toString(16).padStart(2, "0")}
        {color.b.toString(16).padStart(2, "0")}
      </div>
      <div class="inline-block w-40">
        rgb({color.r}, {color.g}, {color.b})
      </div>
      <div class="inline-block">
        hsb(
        {RGBToHSB(color.r, color.g, color.b)
          .map((v) => {
            return Math.round(v);
          })
          .join(", ")}
        )
      </div>
    </div>
  );
};

export const Colors: Component<{}> = (props) => {
  return (
    <div class="container m-auto">
      <h1>Badgevent Theme Colors</h1>
      <div class="flex items-center border border-black">
        <div class="w-6/12 bg-gray-900 text-gray-200 p-10">
          <h1>Dark Mode</h1>
          <div class="flex">
            <div class="mr-4">
              <div class="text-saturated-red">text-saturated-red</div>
              <div class="text-saturated-brown">text-saturated-brown</div>
              <div class="text-saturated-green">text-saturated-green</div>
              <div class="text-saturated-blue">text-saturated-blue</div>
              <div class="text-saturated-purple">text-saturated-purple</div>
            </div>
            <div class="">
              <div class="text-unsaturated-red">text-saturated-red</div>
              <div class="text-unsaturated-brown">text-saturated-brown</div>
              <div class="text-unsaturated-green">text-saturated-green</div>
              <div class="text-unsaturated-blue">text-saturated-blue</div>
              <div class="text-unsaturated-purple">text-saturated-purple</div>
            </div>
          </div>
        </div>
        <div class="w=6/12 bg-gray-200 text-gray-800 p-10">
          <h1>Light Mode</h1>
          <div class="flex">
            <div class="mr-4">
              <div class="text-saturated-red">text-saturated-red</div>
              <div class="text-saturated-brown">text-saturated-brown</div>
              <div class="text-saturated-green">text-saturated-green</div>
              <div class="text-saturated-blue">text-saturated-blue</div>
              <div class="text-saturated-purple">text-saturated-purple</div>
            </div>
            <div class="">
              <div class="text-unsaturated-red">text-saturated-red</div>
              <div class="text-unsaturated-brown">text-saturated-brown</div>
              <div class="text-unsaturated-green">text-saturated-green</div>
              <div class="text-unsaturated-blue">text-saturated-blue</div>
              <div class="text-unsaturated-purple">text-saturated-purple</div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="mt-10 text-2xl font-bold text-saturated-brown">
        List of colors with enough contrast on both light and dark backgrounds
      </h1>
      <h2 class="mt-6 text-lg font-bold">Saturated</h2>
      <div class="">
        <For each={lights}>{(color) => <Color color={color} />}</For>
      </div>
      <br />
      <h2 class="mt-6 text-lg font-bold">Unsaturated</h2>
      <div class="mb-10">
        <For each={darks}>{(color) => <Color color={color} />}</For>
      </div>
    </div>
  );
};
