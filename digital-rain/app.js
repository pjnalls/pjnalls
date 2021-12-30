const code = `LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT０

PオSSイムSイPスMインCイヅンTエアルMアヂピSCイ１アDポRロSイT１ンオンアリアSサエペPロVイデンTデレCTウSアSスメンダンウLラマXイメモヂハルMヅCイムSオMンイSンオビS０

AペリアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT０

PラエセンTイウMヂCタレCウサンダエンエモQウイデMドロルMQウアSンイSイアヂピSCイテMポラドロレMエイウS０

EイウSVイタエアウテMンエSCイウンTエウMQウイレMエSTアDVエンイアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT０

VエリTアリアSPロVイデンT１デセルンTペRSピCイアTイSCオRポリSアリQウアMンオSTルMイLルMトタMイタQウエアSペRンアTウRヒCCオRルPTイエTモヂか

OPTイオCオMモヂマGンアMレCウサンダエンオSTルMCウM０

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT０

VオルPタテSマイオレSアリQウイDQウイアアリQウアMラボレオPTイオエンイMヒC１アヂGンイSSイモSQウイブSダMかNアTウSレM１CウLパエXPリCアボレイCイエンヂSンウLラアSスメンダQウアエラTレCウサンダエイSテ!

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT０

IPサMテMポラFウギアTアリアS１QウアSイエXCエPTウリ１デレCTウSオPTイオVオルPタテSBランヂTイイSVエンイアMエVエンイエTCオンセQウアTウRリベロデビTイS１VオルPタテハルMVエリタTイSエアルMテンエTウRドロレMンウMQウアM０
`;

const addLinesOfCode = async () => {
  new Array(199).fill(0).forEach(async (x, i) => {
    code.split("\n").forEach(async (line, j) => {
      const p = document.createElement("p");
      const sign = Math.round(Math.random() * 1) === 0 ? "-" : "";
      const vh = sign === "-" ? Math.random() * 5 : Math.random() * 55;

      p.setAttribute("class", "line-of-code");
      p.style.right = `${Math.random() * 120}vw`;
      p.style.top = `${sign}${vh}vh`;

      const timeouts = await revealCodeLikeRain(p, line, i, j);

      await timeouts.forEach((t) => clearTimeout(t));
    });
  });
};

const revealCodeLikeRain = async (p, line, i, j) => {
  let characters = "";
  let timeouts = [];

  await line.split("").forEach(async (char, k) => {
    await new Promise(async (resolve) => {
      const timeout = setTimeout(() => {
        let top = parseFloat(p.style.top.split("v")[0]);

        characters += char;

        p.textContent =
          characters.length > 1
            ? characters.substring(0, characters.length - 2)
            : "";
        const span = document.createElement("span");
        span.textContent = characters[characters.length - 1];
        span.setAttribute("class", "cursor");
        p.appendChild(span);

        top += 0.3 * (k + 0.3);
        p.style.top = `${top}vh`;

        document.getElementById("root").appendChild(p);

        if (k >= line.length - 1) {
          document.getElementById("root").removeChild(p);
        }

        resolve();
      }, 111 * (i + 1 + j + 1 + k + 1) + (333 * (i + 1) + 333 * (j + 1)));
      timeouts.push(timeout);
    });
  });
  return new Promise(() => timeouts);
};

const main = () => {
  addLinesOfCode();
};

main();
