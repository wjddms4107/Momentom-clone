const quotes = [
  {
    quote: "인생은 단 한 번뿐, 대충 살아서는 행복할 수 없어!"
  },
  {
    quote: "인생은 미쳐야 재밌다."
  },
  {
    quote: "게으르지 않음은 영원한 삶이요, 게으름은 죽음의 집이다."
  },
  {
    quote: "나는 날마다, 모든 면에서, 점점 더 좋아지고 있다."
  },
  {
    quote: "실패는 잊어라, 하지만 그것이 준 교훈은 절대 잊으면 안 된다."
  },
  {
    quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다."
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라."
  },
  {
    quote: "일단 시작해라, 나중에 완벽해지면 된다."
  },
  {
    quote: "모든 사람들로부터 사랑받지 않아도 된다."
  },
  {
    quote: "피할 수 없으면 즐겨라."
  },

]

const quote = document.querySelector(".quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;

