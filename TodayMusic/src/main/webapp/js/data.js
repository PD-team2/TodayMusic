const qnaList = [
  {
    q: '1. 감성적인 노래보다 신나는 노래가 좋다',
    a: [
      { type: [1, 2, 4, 9] },
      { type: [0, 3, 6, 5, 10, 8] },
    ]
  },
  {
    q: '2. 조용히 음미하는 노래보다 떼창이 좋다 ',
    a: [
      { type: [0, 3, 2, 8] },
      { type: [1, 6, 5, 10] },
    ]
  },
  {
    q: '3. 내 방에서 듣는 노래보다 밖에서 소음과 같이 듣는 노래가 좋다',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
]

const infoList = [
  {
    name: '노래 뭐 좋은 게 좋은거죠, 가리는 노래 없는 진정한 음악인 <만능형>',
    desc: '특별한 장르를 가리지 않고 노래가 좋다면 일단 듣고보는 당신! 쥐에 해당하는 당신은 락부터 발라드까지 모든 노래를 장르를 좋아해 노래의 취향을 잘 타지 않는 스타일이랍니다. 주로 포부가 크고 낙천적인 성향이 있어, 처음 접하는 장르의 노래도 만사 OK! 은근 감성적인 부분도 있어 맘에드는 가사를 곱씹기도 하네요. 당신에게 추천합니다. 김경호의 <금지된 사랑>! '
  },
  {
   name: '북치기박치기, 우리모두 다같이 손머리 위해 음악은 랩이지 <랩형>',
    desc: '노래는 역시 모두가 떼창가능하고 신나는 분위기의 랩이죠! 모두가 한 데 모여 같은 노래를 부를 때 희열을 느끼는 당신 바로 랩을 사랑하는 이 시대의 진정한 래퍼입니다. 랩에 잔잔한 피처링이 있듯 잔잔한 노래도 음미할 줄 아는 감성적인 면도 가진 당신에게 추천합니다. 지코의 <아무노래>! '
  },
  {
     name: '저스트 대애애앤스, 신나는 리듬에 몸을 맡길 줄 아는 당신 <댄스형>',
    desc: '둠칫 두둠칫 노래는 음미하는 것이 아닌 느끼는 것 리듬과 한 몸이 되어 노래를 흥얼거리고 춤을 출 줄 아는 이 시대의 댄스왕! 노래방 왔는데 분위기가 쳐진다?? 마이크 한 번 줘 보시죠 분위기 한 번 쫘악 끌어올리겠습니다! 노래를 즐길 줄 아는 당신에게 추천합니다. 블랙핑크의 <뚜두뚜두>!'
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '잔잔한 선율과 갬성을 터치 가사, 노래를 받아들이는 당신 <발라드형>',
    desc: '노래란 듣는 사람에게 감동을 주기위한 것 노래를 들으며 감성을 자극하고 노래의 이야기를 자신의 이야기로 가져올 수 있는 당신! 여기에 쭉쭉 올라가는 고음을 가진 가창력은 덤! 감수성을 터치받고 노래를 통해 위로를 받고 싶어하는 당신에게 추천합니다. 가비앤제이 <해바라기>'
  },
  
]