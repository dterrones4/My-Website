handlePageClicks();

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ '361px',   '480px'  ],
		xxsmall:  [ null,      '360px'  ]
	});


function handlePageClicks(){
	$('#workBtn').on('click', function(event){
		$('body').addClass('is-article-visible');
		$('#work').removeClass('inactive');
		$('#work').addClass('active');
		listenForClickOutOfArticle(1);
	})

	$('#aboutMeBtn').on('click', function(event){
		$('body').addClass('is-article-visible');
		$('#intro').removeClass('inactive');
		$('#intro').addClass('active');
		listenForClickOutOfArticle(0);
	})

	$('#contactBtn').on('click', function(event){
		$('body').addClass('is-article-visible');
		$('#contact').removeClass('inactive');
		$('#contact').addClass('active');
		listenForClickOutOfArticle(2);
	})
}

function listenForClickOutOfArticle(i){
	let articleList = document.getElementsByClassName('active');
	let modal = articleList[0];

	let closeBtnList = document.getElementsByClassName('close');
	let closeBtn = closeBtnList[i];

	//when user clicks outside of current window close the window
	window.onclick = function(event){
		if(event.target == closeBtn){
			$(modal).removeClass('active');
			$(modal).addClass('inactive');
			$('body').removeClass('is-article-visible')
		}
	}
}