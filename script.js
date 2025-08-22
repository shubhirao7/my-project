(function () {
  const container = document.getElementById("content");
  if (!container) return;
  const perPage = 50;
  const pageName = document.body.dataset.pagename || "Page";
  const seeds = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    "Curabitur fringilla porta risus vitae ultricies",
    "Vivamus volutpat pulvinar nunc nec fermentum",
    "Aenean commodo elit non sapien faucibus posuere",
    "Integer quis magna nec arcu dictum vehicula"
  ];
  function makeParagraph(i) {
    const base = seeds[i % seeds.length];
    return base + ` — ${pageName} Paragraph #${i+1}`;
  }
  for (let i=0;i<perPage;i++){
    const p=document.createElement("p");
    p.className="paragraph";
    p.textContent=makeParagraph(i);
    container.appendChild(p);
  }
  const counter=document.getElementById("paraCount");
  if(counter) counter.textContent=perPage.toString();
})();