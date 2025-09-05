const MOOD_THEMES = {
  happy: { bg: 'linear-gradient(120deg,#FFF8D6,#FFE5B4)', accent: '#F59E0B' },
  sad: { bg: 'linear-gradient(120deg,#D6E8FF,#B4C7FF)', accent: '#3B82F6' },
  romantic: { bg: 'linear-gradient(120deg,#FFE6F7,#FFCCE5)', accent: '#EC4899' },
  excited: { bg: 'linear-gradient(120deg,#FFFACD,#FFDAB9)', accent: '#F97316' },
  relaxed: { bg: 'linear-gradient(120deg,#D6FFE5,#B4FFD1)', accent: '#22C55E' },
  focused: { bg: 'linear-gradient(120deg,#E6F7FF,#CCEEFF)', accent: '#0284C7' }
};
const RECOMMENDATIONS = {
  happy: [
    { title: "Phir Se Ud Chala (Rockstar)", type: "Song", note: "Feel-good vibe", link: "https://youtu.be/-3gQ6HIkRys?si=IMgoFLXGndKcMGrl" },
    { title: "Dil Dhadakne Do(ZNMD)", type: "Song", note: "Celebrates life with energy", link: "https://youtu.be/WuMWwPHTSoY?si=POOr99hMoDy3jgyg" },
    { title: "Dil Dhadakne Do (Gallan Goodiyaan)", type: "Song", note: "Dance/Family fun", link: "https://youtu.be/jCEdTq3j-0U?si=lGOS198II9rtyPnr" },
    { title: "London Thumakda (Queen)", type: "Song", note: "Joyful wedding celebration", link: "https://youtu.be/N5bELC8MXeU?si=3IWFTIJx0w9IBduw" },
    { title: "Senorita", type: "Song", note: "Friendship and carefree moments", link: "https://youtu.be/2Z0Put0teCM?si=8dU5d2kBZ8pAEM69" },
    { title: "Badtameez Dil", type: "Song", note: "Party mood", link: "https://youtu.be/II2EO3Nw4m0?si=Rmj8V3ws-48aEasH" },
    { title: "Zindagi Na Milegi Dobara", type: "Movie", note: "A joyful journey", link: "https://www.primevideo.com/detail/0PKHZ1YYPYOAK3BQAAFPX9O02B/ref=atv_dp_share_cu_r" },
    { title: "3 Idiots", type: "Movie", note: "Happiness and laughter", link: "https://www.primevideo.com/detail/0IMQLIS5J8EC6OLJBZAIAWY0XF/ref=atv_dp_share_cu_r" },
    { title: "Dear Zindagi", type: "Movie", note: "Self-discovery", link: "https://www.netflix.com/in/title/80158042?source=35&fromWatch=true" }
  ],
  sad: [
    { title: "Channa Mereya (ADHM)", type: "Song", note: "Heartfelt classic", link: "https://www.youtube.com/watch?v=bzSTpdcs-EI" },
    { title: "Agar Tum Saath Ho (Tamasha)", type: "Song", note: "Emotional ballad", link: "https://www.youtube.com/watch?v=sK7riqg2mr4" },
    { title: "Tadap Tadap (Hum Dil De Chuke Sanam)", type: "Song", note: "Painful melody", link: "https://youtu.be/KwiDJclWo44?si=ekc6MVUoVxSmPf3n" },
    { title: "Bhula Dena (Aashiqui 2)", type: "Song", note: "Emotional heartbreak", link: "https://youtu.be/II4CvWvgIsI?si=SalIzHbwkU4w2U0i" },
    { title: "Jeene Bhi De (Dil Sambhal Jaa Zara)", type: "Song", note: "Slow emotional track", link: "https://youtu.be/0KGP9f3duEg?si=eqc3fokilIRUymoH" },
    { title: "Kabira", type: "Song", note: "Soulful", link: "https://youtu.be/jHNNMj5bNQw?si=WtGvP1f70Rs2hP3w" },
    { title: "Kal Ho Naa Ho", type: "Movie", note: "Emotional rollercoaster", link: "https://www.primevideo.com/detail/0Q374E5V0RUL6CHL90JIR6L9BA/ref=atv_dp_share_cu_r" },
    { title: "Rockstar", type: "Movie", note: "Pain", link: "https://www.primevideo.com/detail/0GZ3XU9U7KA5M010TVE9JTKZ8Q/ref=atv_dp_share_cu_r" },
    { title: "Tamasha", type: "Movie", note: "Loneliness", link: "https://www.primevideo.com/detail/0I7KBYG8XW4CCWCM6NOAV8SJWP/ref=atv_dp_share_cu_r" }

  ],
  romantic: [
    { title: "Tum Hi Ho (Aashiqui 2)", type: "Song", note: "Iconic romance", link: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
    { title: "Raatan Lambiyan (Shershaah)", type: "Song", note: "Sweet duet", link: "https://www.youtube.com/watch?v=gvyUuxdRdR4" },
    { title: "Pee Loon (Once Upon a Time in Mumbaai)", type: "Song", note: "Romantic melody", link: "https://youtu.be/WCTro3qabjE?si=v16nngupZQha_HFx" },
    { title: "Janam Janam (Dilwale)", type: "Song", note: "Soulful romantic", link: "https://www.youtube.com/watch?v=9R8aSKwTEMM" },
    { title: "Hasi Ban Gaye (Hamari Adhuri Kahani)", type: "Song", note: "Heart-touching", link: "https://youtu.be/pIBoAh4OXhQ?si=ZBhdwsPHoNi3K_7y" },
    { title: "Tum Se Hi", type: "Song", note: "Everyday love", link: "https://youtu.be/Cb6wuzOurPc?si=bi7TM683_PMZ2F_q" },
    { title: "Dilwale Dulhania Le Jayenge", type: "Movie", note: "The ultimate love story", link: "https://www.primevideo.com/detail/0FWM6LXBGLJP0XQDQYPI9H4PMH/ref=atv_dp_share_cu_r" },
    { title: "Jab We Met", type: "Movie", note: "Heartfelt romance", link: "https://www.primevideo.com/detail/0IZIGS3J12SA8YI4UQQT2OS4WY/ref=atv_dp_share_cu_r" },
    { title: "Veer-Zaara", type: "Movie", note: "Eternal sacrifice for love", link: "https://www.primevideo.com/detail/0S7X9F1I1XQCMMK42JMFFRKMZ3/ref=atv_dp_share_cu_r" },

  ],
  excited: [
    { title: "Zinda", type: "Song", note: "Survival spirit", link: "https://youtu.be/Ax0G_P2dSBw?si=XMauAWHyvsWQ0dQh" },
    { title: "Kala Chashma", type: "Song", note: "Party starter", link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
    { title: "Malhari", type: "Song", note: "Celebration", link: "https://youtu.be/sRlA7JWTj04?si=yKk3T3TuhM-5Qogu" },
    { title: "Nashe Si Chadh Gayi (Befikre)", type: "Song", note: "Energetic vibe", link: "https://youtu.be/HoCwa6gnmM0?si=hy2AzAiKqaoJnaBf" },
    { title: "Abhi Toh Party Shuru Hui Hai", type: "Song", note: "Party mood", link: "https://youtu.be/8LZgzAZ2lpQ?si=2fJfKBKDqqc3YfS9" },
    { title: "Shava Shava", type: "Song", note: "Dance and fun", link: "https://youtu.be/ZTARlM0pCP4?si=0EgUjsLJH3aiPF-W" },
    { title: "War (2019)", type: "Movie", note: "Action/Thriller", link: "https://www.primevideo.com/detail/0OO51CVU0PX8AV1WFZCU9FGHXQ/ref=atv_dp_share_cu_r" },
    { title: "Gully Boy", type: "Movie", note: "Passion and energy", link: "https://www.primevideo.com/detail/0I5OF8K1O8JNLUPOQ3VU3MBR5I/ref=atv_dp_share_cu_r" },
    { title: "Chak De! India", type: "Movie", note: "Teamwork", link: "https://www.primevideo.com/detail/0ST8IWCMUO5NMQM3413WKVMWQS/ref=atv_dp_share_cu_r" },
  ],
  relaxed: [
    { title: "Kun Faya Kun (Rockstar)", type: "Song", note: "Soul-soothing", link: "https://www.youtube.com/watch?v=T94PHkuydcw" },
    { title: "Shaam (Aisha)", type: "Song", note: "Soft and breezy", link: "https://youtu.be/kl8T6tsOZJk?si=kAdKlV29J_F9IPoY" },
    { title: "IIahi", type: "Song", note: "Peaceful", link: "https://youtu.be/fdubeMFwuGs?si=QYlLf_vYV6Fw21FE" },
    { title: "Dil Dhoondta Hai", type: "Song", note: "Soulful", link: "https://youtu.be/fwqRf66ujAc?si=vG9GO5X6nvhpw8jk" },
    { title: "Kya Mujhe Pyar Hai", type: "Song", note: "Chill", link: "https://youtu.be/Gg6NMU4ivXM?si=eG-P5hkkSbAlyrIv" },
    { title: "Saibo", type: "Song", note: "Relaxing melody", link: "https://youtu.be/kQkH6Ch8Kbg?si=8HFm7xF9g3mjs2Io" },
    { title: "Barfi!", type: "Movie", note: "Heart-touching", link: "https://www.primevideo.com/detail/0JFHNMQNFDGTBMDNV9TGH5DGPL/ref=atv_dp_share_cu_r" },
    { title: "Wake Up Sid", type: "Movie", note: "Comforting Journey", link: "https://www.primevideo.com/detail/0PWF5MOTHJHMQCXXS65ZH2NZ65/ref=atv_dp_share_cu_r" },
    { title: "Yeh Jawaani Hai Deewani", type: "Movie", note: "Relaxing", link: "https://www.primevideo.com/detail/0HKBSR9CSIKKCHHG0SWYJBSW3G/ref=atv_dp_share_cu_r" },
  ],
  focused: [
    { title: "Aashayein", type: "Song", note: "Motivating", link: "https://youtu.be/bmyv0nRkDmc?si=f8cdaSbfP7N-kra8" },
    { title: "Lakshya", type: "Song", note: "Sharo focus", link: "https://youtu.be/8DMF0U6xV78?si=pa133quUy3uKztKy" },
    { title: "Besabriyaan", type: "Song", note: "Struggles", link: "https://youtu.be/UBBHpoW3AKA?si=uBdRavsm2pZVaSmo" },
    { title: "Ziddi Dil", type: "Song", note: "Never give up", link: "https://youtu.be/puKD3nkB1h4?si=YJvTHtuBGG1lKN2a" },
    { title: "Mitwa", type: "Song", note: "Thoughtful", link: "https://youtu.be/ru_5PA8cwkE?si=5ZBZUfytnEbbbf3Z" },
    { title: "Patakha Guddi", type: "Song", note: "Free", link: "https://youtu.be/8HDTS80dlr4?si=tGJaHk_xhtLEbqDG" },
    { title: "October (2018)", type: "Movie", note: "Calm, thoughtful", link: "https://youtu.be/Yb0OLOwgkiA?si=WurxMZhFOh6sBeoC" },
    { title: "Lakshya", type: "Movie", note: "Focus", link: "https://www.primevideo.com/detail/0QX1A99V40EGILD1J4VMOTQ2VI/ref=atv_dp_share_cu_r" },
    { title: "Fighter", type: "Movie", note: "Leadership", link: "https://www.netflix.com/in/title/81698397?source=35&fromWatch=true" }
  ]
};
function showRecommendations(mood) {
  const theme = MOOD_THEMES[mood];
  document.body.style.background = theme.bg;
  document.querySelector(".container").style.borderColor = theme.accent;
}
function applyMoodTheme(mood) {
  const theme = MOOD_THEMES[mood] || MOOD_THEMES.happy;
  document.body.style.background = theme.bg;
  document.documentElement.style.setProperty('--accent', theme.accent);
}
function renderCards(mood) {
  const list = RECOMMENDATIONS[mood] || [];
  const cards = document.getElementById('cards');
  cards.innerHTML = '';

  list.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    const pill = document.createElement('span');
    pill.className = 'type';
    pill.textContent = item.type;

    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    const p = document.createElement('p');
    p.textContent = item.note || '';

    const a = document.createElement('a');
    a.href = item.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `Open ${item.type === 'Song' ? 'YouTube' : 'Details'} ↗`;

    card.appendChild(pill);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a);
    cards.appendChild(card);
  });


  const recTitle = document.querySelector('#recommendations .section-title');
  recTitle.textContent = `Recommendations — ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;

  const helper = document.querySelector('#recommendations .muted');
  if (helper) helper.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      applyMoodTheme(mood);
      renderCards(mood);
    });
  });
});
