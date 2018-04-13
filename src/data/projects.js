const projects = [
  {
    display: false,
    highlights: false,
    title: 'ExpoFrance',
    type: '<b>Type :</b> iPad Application and responsive website',
    tools: '<b>Tools :</b> AppGyver <b>•</b> Angular <b>•</b> LESS',
    desc: 'France is candidate for the <b>2025 World Expo</b>.' +
    ' I created an in-house iPad application for <b>Deloitte</b> which sponsors the event.<br/><br/>' +
    'The main purpose of the app is to <b>show off the project</b> and allow the user to <b>support the candidature</b> by signing a petition.<br/><br/>' +
    'I also developed a <b>web and responsive version</b> with <b>special layout</b> for mobile browsers.',
    link: '',
    imgkey: 'expo',
    background: 'url(images/works/expo.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin, left:$scope.sideMargin },
  },
  {
    display: false,
    highlights: false,
    title: 'Le Point Rouge',
    type: '<b>Type :</b> E-commerce',
    tools: '<b>Tools : </b> Wordpress <b>•</b> WP E-Commerce <b>•</b> Isotope JS',
    desc: '<b>Le Point Rouge</b> is an <b>e-commerce</b> website where you can buy <b>limited edition</b> works of art printed on t-shirts.<br/><br/>' +
    'I developed it using <b>Wordpress</b> and an existing e-commerce plug-in.',
    link: 'http://www.lepointrouge.eu/',
    imgkey: 'lpr',
    background: 'url(images/works/lpr.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin, left:$scope.sideMargin + ($scope.losDiag) + $scope.interMargin }
  },
  {
    display: false,
    highlights: false,
    title: 'Deloitte',
    type: '<b>Type :</b> Responsive animation for desktop and tablet',
    tools: '<b>Tools :</b> jQuery <b>•</b> TweenMax <b>•</b> LESS',
    desc: "<b>Deloitte</b> is one of the largest professionnal services network in the world. They provide <b>mutliple services</b> such as financial advisory and consulting.<br/><br/>" +
    "I developed for them a <b>responsive animation</b> that aims to describe one of their service. There are <b>two layouts</b> for the animation depending on the user's device.",
    link: 'http://deloitte.valentinhenry.com/',
    imgkey: 'deloitte',
    background: 'url(images/works/deloitte.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin, left:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2) }
  },
  {
    display: false,
    highlights: false,
    title: 'Marie 3D',
    type: '<b>Type :</b> Portfolio',
    tools: '<b>Tools :</b> Wordpress <b>•</b> jQuery <b>•</b> LESS',
    desc: '<b>Marie</b> is a <b>3D artist</b> working in the sector of video games.<br/><br/>' +
    'I developed her personnal website using <b>Wordpress</b> and some <b>javascript librairies</b> for the front-end',
    link: 'http://www.marie3d.com/',
    imgkey: 'marie',
    background: 'url(images/works/marie3d.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag/2) + ($scope.interMargin/2), left:$scope.sideMargin + ($scope.losDiag/2) + ($scope.interMargin/2) }
  },
  {
    display: false,
    highlights: false,
    title: 'Motospot',
    type: '<b>Type :</b> Hybrid application',
    tools: '<b>Tools :</b> AppGyver <b>•</b> Angular <b>•</b> LESS',
    desc: '<b>Motospot</b> is a social network for <b>motorbikes lovers</b>.<br/><br/>' +
    'I am currently working on a <b>cross-platform application</b> which provides a mobile <b>notification center</b> for the social network. Users can see their notifications and have <b>direct links</b> to functions.<br/><br/>App will be released soon on <b>Android</b> and <b>iOS<b/>.',
    link: '',
    imgkey: 'motospot',
    background: 'url(images/works/motospot.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag/2) + ($scope.interMargin/2), left:$scope.sideMargin + ($scope.losDiag*1.5) + ($scope.interMargin*1.5) }
  },
  {
    display: false,
    highlights: false,
    title: 'Céleste Bigo',
    type: '<b>Type :</b> Portfolio',
    tools: '<b>Tools :</b> jQuery <b>•</b> TweenMax <b>•</b> LESS',
    desc: 'Céleste is a an <b>artistic director</b>. She now works in a french web agency.<br/><br/>' +
    'I created her website <b>from scratch</b> using some <b>javascript librairies</b> for the front-end development.',
    link: 'http://celeste-bigo.com/',
    imgkey: 'celeste',
    background: 'url(images/works/celeste.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + $scope.losDiag + $scope.interMargin, left:$scope.sideMargin }
  },
  {
    display: false,
    highlights: false,
    title: 'center',
    type: '',
    tools: '',
    desc: '',
    link: '',
    imgkey: '',
    background: 'url(images/works/am.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + $scope.losDiag + $scope.interMargin, left:$scope.sideMargin + ($scope.losDiag) + $scope.interMargin }
  },
  {
    display: false,
    highlights: false,
    title: 'Cours Toujours',
    type: '<b>Type :</b> Blog with e-commerce',
    tools: '<b>Tools :</b> Wordpress <b>•</b> WP E-commerce <b>•</b> jQuery',
    desc: 'Cours Toujours is a <b>publisher</b> based in Picardie (France).<br/><br/>' +
    'I created their blog using <b>Wordpress</b> with a basic theme then I added an existing <b>e-commerce plug-in</b>. Visitors can <b>buy their books</b> online.',
    link: 'http://courstoujours-editions.com/',
    imgkey: 'ctj',
    background: 'url(images/works/ctj.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + $scope.losDiag + $scope.interMargin, left:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2) }
  },
  {
    display: false,
    highlights: false,
    title: 'Youtube Covers',
    type: '<b>Type :</b> Video Editing',
    tools: '<b>Tools :</b> Cameras <b>•</b> Première <b>•</b> Music',
    desc: 'Whenever I have free time, I want to make <b>music</b>.<br/><br/>' +
    'I created in 2013 a <b>Youtube channel</b> where I post some <b>drums and piano</b> covers. It allows me to <b>combine</b> video editing and music. I use <b>several cameras</b> to film, then I edit video on <b>Première Pro</b>.<br/><br/>' +
    'A friend <b>bass player joined me</b> on my last cover.',
    link: 'https://www.youtube.com/watch?v=JQtFqocXDTM',
    imgkey: 'covers',
    background: 'url(images/works/covers.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag*1.5) + ($scope.interMargin*1.5), left:$scope.sideMargin + ($scope.losDiag/2) + ($scope.interMargin/2) }
  },
  {
    display: false,
    highlights: false,
    title: 'EmoShoot',
    type: '<b>Type :</b> Browser video game',
    tools: '<b>Tools :</b> Photoshop <b>•</b> jQuery <b>•</b> LESS',
    desc: 'EmoShoot is a <b>school video game project</b>.<br/><br/>' +
    'I created the <b>graphic universe</b> of the game, then I developed it <b>from scratch</b> using jQuery. The main purpose of this project ' +
    'was to <b>manage collisions</b> in the game with javascript.<br/><br/>' +
    'I hope you like <b>metal music</b> !',
    link: 'http://emoshoot.valentinhenry.com/',
    imgkey: 'emo',
    background: 'url(images/works/emo.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag*1.5) + ($scope.interMargin*1.5), left:$scope.sideMargin + ($scope.losDiag*1.5) + ($scope.interMargin*1.5) }
  },
  {
    display: false,
    highlights: false,
    title: 'Trigsys ARC',
    type: '<b>Type :</b> Corporate website',
    tools: '<b>Tools :</b> Wordpress <b>•</b> jQuery <b>•</b> LESS',
    desc: 'Trigsys ARC is a firm specialised in <b>patented automatic reconnectors</b>.<br/><br/>' +
    'I created their corporate website using <b>Wordpress</b> and by <b>creating a theme</b>. The website is <b>available in 3 languages</b>.',
    link: 'http://www.trigsys.com',
    imgkey: 'arc',
    background: 'url(images/works/arc.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2), left:$scope.sideMargin }
  },
  {
    display: false,
    highlights: false,
    title: 'Breaking Wave',
    type: '<b>Type :</b> Graphic design and video editing',
    tools: '<b>Tools :</b> Photoshop <b>•</b> Illustrator <b>•</b> Première Pro',
    desc: 'Breaking Wave is a <b>music band</b> I created with friends some years ago.<br/><br/>' +
    'I am playing <b>drums</b> for the band but I am in charge of the <b>visual communication</b> too. I started by <b>designing the logo</b>, then I made some <b>video editing</b> like teasers or live.<br><br>' +
    'We released <b>our first record</b> and I created the <b>artwork of the sleeve</b>.<br/>I created the <b>website</b> too.',
    link: 'http://www.breakingwave.fr',
    imgkey: 'bw',
    background: 'url(images/works/bw.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2), left:$scope.sideMargin + ($scope.losDiag) + $scope.interMargin }
  },
  {
    display: false,
    highlights: false,
    title: 'Château de la Cormerais',
    type: '<b>Type :</b> Corporate website',
    tools: '<b>Tools :</b> Wordpress <b>•</b> jQuery <b>•</b> LESS',
    desc: 'Thierry Besnard is an independant french <b>wine-maker</b>.<br/><br/>' +
    'I am currently developing his corporate website using <b>Wordpress</b>.<br/>He will use it to <b>manage</b> and <b>present</b> products he sells.<br/><br/>' +
    'Website will be <b>online soon</b>.',
    link: '',
    imgkey: 'cdlc',
    background: 'url(images/works/cdlc.jpg)',
    // css: { width:$scope.losDim, height:$scope.losDim, top:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2), left:$scope.sideMargin + ($scope.losDiag*2) + ($scope.interMargin*2) }
  }

];

export default projects