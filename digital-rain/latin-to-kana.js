let textContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Possimus ipsum incidunt earum adipisci, ad porro sit, non alias saepe provident delectus assumenda nulla maxime modi harum ducimus omnis nobis. 

Aperiam?
      
Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Praesentium dicta recusandae nemo quidem dolorum quas nisi adipisci tempora dolorem eius. 

Eius vitae autem nesciunt eum qui rem est ad veniam?

Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Velit alias provident, deserunt perspiciatis corporis aliquam nostrum illum totam itaque aspernatur hic corrupti et modi? 

Optio commodi magnam recusandae nostrum cum.

Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Voluptates maiores aliquid quia aliquam labore optio enim hic, a dignissimos quibusdam? Natus rem, culpa explicabo reiciendis nulla assumenda quaerat recusandae iste!

Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Ipsam tempora fugiat alias, quasi excepturi, delectus optio voluptates blanditiis veniam eveniet consequatur libero debitis, voluptate harum veritatis earum tenetur dolorem numquam.

Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Similique nisi veritatis qui vitae dignissimos eveniet est recusandae, veniam repellat nulla, vero nemo! Ut ipsum possimus molestiae nam esse ipsa suscipit.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. 

Dolorum reiciendis nihil laboriosam sapiente! Laboriosam perspiciatis sed repellat accusantium expedita ea debitis voluptate omnis placeat numquam, dignissimos aliquid ipsa pariatur laudantium.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. 

Necessitatibus hic, debitis vero velit consectetur iste quibusdam, nostrum, maiores totam perspiciatis explicabo recusandae quas dolorum inventore voluptas molestiae provident ullam voluptatem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa consequuntur accusantium dolorum unde blanditiis, molestias eos perspiciatis qui facere voluptatem nulla eligendi! Modi esse ea libero neque voluptatum laudantium.

Lorem ipsum dolor sit amet consectetur adipisicing elit. 

Voluptate quis quibusdam nesciunt pariatur. Sunt nostrum cumque, possimus atque totam natus voluptatem? Eveniet pariatur eum numquam excepturi dignissimos culpa provident ipsum!
      
`;

const katakanaDictionary = {
  a: "ア",
  i: "イ",
  u: "ウ",
  e: "エ",
  o: "オ",
  ka: "カ",
  ki: "キ",
  ku: "ク",
  ke: "ケ",
  ko: "コ",
  ga: "ガ",
  gi: "ギ",
  gu: "グ",
  ge: "ゲ",
  go: "ゴ",
  sa: "サ",
  shi: "シ",
  su: "ス",
  se: "セ",
  so: "ソ",
  za: "ザ",
  ji: "ジ",
  zu: "ズ",
  ze: "ゼ",
  zo: "ゾ",
  ta: "タ",
  chi: "チ",
  tsu: "ツ",
  te: "テ",
  to: "ト",
  da: "ダ",
  di: "ヂ",
  du: "ヅ",
  de: "デ",
  do: "ド",
  na: "ナ",
  ni: "ニ",
  nu: "ヌ",
  ne: "ネ",
  no: "ノ",
  ha: "ハ",
  hi: "ヒ",
  hu: "フ",
  he: "ヘ",
  ho: "ホ",
  ba: "バ",
  bi: "ビ",
  bu: "ブ",
  be: "ベ",
  bo: "ボ",
  pa: "パ",
  pi: "ピ",
  pu: "プ",
  pe: "ペ",
  po: "ポ",
  ma: "マ",
  mi: "ミ",
  mu: "ム",
  me: "メ",
  mo: "モ",
  ra: "ラ",
  ri: "リ",
  ru: "ル",
  re: "レ",
  ro: "ロ",
  la: "ラ",
  li: "リ",
  lu: "ル",
  le: "レ",
  lo: "ロ",
  ya: "ヤ",
  yu: "ユ",
  yo: "ヨ",
  wa: "ワ",
  wo: "ヲ",
  n: "ン",
  ".": "０",
  ",": "１",
  "?": "か",
  '"': "0",
  ":": "1",
};

let stringBuilder = "";

textContent.split(" ").forEach((word) => {
  for (let i = 0; i < word.length; ) {
    if (katakanaDictionary[word[i]]) {
      stringBuilder += katakanaDictionary[word[i]];
      i++;
    } else if (
      i < word.length - 1 &&
      katakanaDictionary[word[i] + word[i + 1]]
    ) {
      stringBuilder += katakanaDictionary[word[i] + word[i + 1]];
      i += 2;
    } else {
      stringBuilder += word[i].toUpperCase();
      i++;
    }
  }
});

console.log(stringBuilder);
